"use server"

import { z } from "zod"
import { sendSubscriptionConfirmationEmail } from "@/lib/smtp/send-subscription-confirmation-email"
import { sendSubscriptionNotificationEmail } from "@/lib/smtp/send-subscription-notification-email"
import { verifyRecaptcha } from "@/lib/recaptcha"
// Define the schema for form validation
const subscribeFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

// Define the initial state type
type State = {
  success: boolean
  errors: {
    email: string[]
    recaptcha: string[]
    _form: string[]
  }
}

// Format date for email
function formatDate(date: Date): string {
  return date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  })
}

// Main subscription form submission handler
export async function subscribeToNewsletter(prevState: State, formData: FormData): Promise<State> {
  // Initialize the state
  const state: State = {
    success: false,
    errors: {
      email: [],
      recaptcha: [],
      _form: [],
    },
  }

    // Get reCAPTCHA token
  const recaptchaToken = formData.get("recaptchaToken") as string

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
  if (!isRecaptchaValid) {
    state.errors.recaptcha = ["Please complete the reCAPTCHA verification"]
    return state
  }

  

  // Extract form data
  const email = formData.get("email")

  // Validate form data
  const validationResult = subscribeFormSchema.safeParse({ email })

  if (!validationResult.success) {
    // Map validation errors to state
    const errors = validationResult.error.flatten().fieldErrors

    if (errors.email) state.errors.email = errors.email

    return state
  }

  try {
    const validatedEmail = validationResult.data.email
    const currentDate = formatDate(new Date())

    // Here you would typically add the email to your newsletter database
    // For example:
    // await prisma.subscriber.create({
    //   data: { email: validatedEmail }
    // })

    // Only send emails if SMTP is configured
    if (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASS) {
      try {
        // Send confirmation email to the subscriber
        await sendSubscriptionConfirmationEmail({
          recipient: validatedEmail,
          email: validatedEmail,
        })

        // Send notification email to the admin
       
        const adminEmail =  process.env.ADMIN_EMAIL
        
        await sendSubscriptionNotificationEmail({
          // @ts-ignore
          recipient: adminEmail,
          email: validatedEmail,
          date: currentDate,
        })
      } catch (emailError) {
        console.error("Error sending emails:", emailError)
        // Continue with success even if email fails
      }
    } else {
      console.log("SMTP not configured. Skipping emails.")
    }

    // Update state to indicate success
    state.success = true
  } catch (error) {
    console.error("Error processing subscription:", error)
    state.errors._form = ["Failed to subscribe. Please try again later."]
  }

  return state
}
