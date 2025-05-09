import { render } from "@react-email/render"

import { ThankYouEmail, type ThankYouEmailData } from "@/emails/thank-you-email"
import { sendEmail } from "@/lib/smtp/mailer/send-email"

export async function sendThankYouEmail(data: ThankYouEmailData & { recipient: string }): Promise<void> {
  const component = ThankYouEmail(data)
  // @ts-ignore
  const html = await render(component)
  // @ts-ignore
  const text = await render(component, { plainText: true })
 
  await sendEmail({
    recipient: data.recipient,
    subject: "Thank you for contacting us",
    html,
    text,
  })
}
