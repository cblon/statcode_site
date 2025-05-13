"use server"

import { z } from "zod"
import { sendThankYouEmail } from "@/lib/smtp/send-thank-you-email"
import { sendNotificationEmail } from "@/lib/smtp/send-notification-email"
import { verifyRecaptcha } from "@/lib/recaptcha"
// Define the schema for form validation
const contactFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

// Define the initial state type
type State = {
  success: boolean
  errors: {
    firstname: string[]
    lastname: string[]
    email: string[]
    message: string[]
    recaptcha: string[]
    _form: string[]
  }
}

// Main contact form submission handler
export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  // Initialize the state
  const state: State = {
    success: false,
    errors: {
      firstname: [],
      lastname: [],
      email: [],
      message: [],
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
  const rawFormData = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  // Validate form data
  const validationResult = contactFormSchema.safeParse(rawFormData)

  if (!validationResult.success) {
    // Map validation errors to state
    const errors = validationResult.error.flatten().fieldErrors

    if (errors.firstname) state.errors.firstname = errors.firstname
    if (errors.lastname) state.errors.lastname = errors.lastname
    if (errors.email) state.errors.email = errors.email
    if (errors.message) state.errors.message = errors.message

    return state
  }

  try {
    const { firstname, lastname, email, message } = validationResult.data
    const fullName = `${firstname} ${lastname}`

    // Send thank you email to the user
    await sendThankYouEmail({
      recipient: email,
      name: firstname,
    })

    // Send notification email to the site owner
    await sendNotificationEmail({
      // @ts-ignore
      recipient:  process.env.ADMIN_EMAIL,
      name: fullName,
      email,
      message,
    })

    // Update state to indicate success
    state.success = true
  } catch (error) {
    console.error("Error sending email:", error)
    state.errors._form = ["Failed to send your message. Please try again later."]
  }

  return state
}
