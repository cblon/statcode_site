import { render } from "@react-email/render"

import {
  SubscriptionConfirmationEmail,
  type SubscriptionConfirmationEmailData,
} from "@/emails/subscription-confirmation-email"
import { sendEmail } from "@/lib/smtp/mailer/send-email"

export async function sendSubscriptionConfirmationEmail(
  data: SubscriptionConfirmationEmailData & { recipient: string },
): Promise<void> {
  const component = SubscriptionConfirmationEmail(data)
  // @ts-ignore
  const html = await render(component) 
  // @ts-ignore
  const text = await render(component, { plainText: true })

  await sendEmail({
    recipient: data.recipient,
    subject: "Welcome to Our Newsletter",
    html,
    text,
  })
}
