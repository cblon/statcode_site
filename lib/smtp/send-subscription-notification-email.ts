import { render } from "@react-email/render"

import {
  SubscriptionNotificationEmail,
  type SubscriptionNotificationEmailData,
} from "@/emails/subscription-notification-email"
import { sendEmail } from "@/lib/smtp/mailer/send-email"

export async function sendSubscriptionNotificationEmail(
  data: SubscriptionNotificationEmailData & { recipient: string },
): Promise<void> {
  try {
    const component = SubscriptionNotificationEmail(data) 
    // @ts-ignore
    const html = await render(component)
    // @ts-ignore
    const text = await render(component, { plainText: true })

    await sendEmail({
      recipient: data.recipient,
      subject: "New Newsletter Subscription",
      html,
      text,
    })
  } catch (error) {
    console.error("Error sending subscription notification email:", error)
    throw error
  }
}
