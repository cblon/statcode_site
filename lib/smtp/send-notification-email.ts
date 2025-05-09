import { render } from "@react-email/render"

import { NotificationEmail, type NotificationEmailData } from "@/emails/notification-email"
import { sendEmail } from "@/lib/smtp/mailer/send-email"

export async function sendNotificationEmail(data: NotificationEmailData & { recipient: string }): Promise<void> {
  const component = NotificationEmail(data);
  // @ts-ignore
  const html = await render(component)
  // @ts-ignore
  const text = await render(component, { plainText: true })

  await sendEmail({
    recipient: data.recipient,
    subject: "New Contact Form Submission",
    html,
    text,
  })
}
