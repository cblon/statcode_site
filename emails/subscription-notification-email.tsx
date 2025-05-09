import type * as React from "react"

export interface SubscriptionNotificationEmailData {
  email: string
  date: string
}

export const SubscriptionNotificationEmail: React.FC<SubscriptionNotificationEmailData> = ({ email, date }) => {
  return (
    <div style={container}>
      <h1 style={heading}>New Newsletter Subscription</h1>
      <p style={paragraph}>Someone has just subscribed to your newsletter. Here are the details:</p>
      <div style={card}>
        <div style={fieldContainer}>
          <p style={label}>Email:</p>
          <p style={value}>{email}</p>
        </div>
        <div style={fieldContainer}>
          <p style={label}>Date:</p>
          <p style={value}>{date}</p>
        </div>
      </div>
      <div style={footer}>
        <p style={footerText}>This is an automated notification from your website's newsletter subscription form.</p>
      </div>
    </div>
  )
}

// Styles
const container = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
}

const heading = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
}

const paragraph = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "16px",
}

const card = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
}

const fieldContainer = {
  marginBottom: "12px",
}

const label = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 4px 0",
}

const value = {
  color: "#333",
  fontSize: "16px",
  margin: "0",
}

const footer = {
  marginTop: "30px",
  borderTop: "1px solid #eee",
  paddingTop: "20px",
}

const footerText = {
  color: "#777",
  fontSize: "14px",
  margin: "5px 0",
}
