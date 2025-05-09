import type * as React from "react"

export interface SubscriptionConfirmationEmailData {
  email: string
}

export const SubscriptionConfirmationEmail: React.FC<SubscriptionConfirmationEmailData> = ({ email }) => {
  return (
    <div style={container}>
      <h1 style={heading}>Thanks for Subscribing!</h1>
      <p style={paragraph}>
        Thank you for subscribing to our newsletter. You'll now receive updates on our latest news, articles, and
        promotions.
      </p>
      <div style={card}>
        <p style={cardText}>
          You've subscribed with: <strong>{email}</strong>
        </p>
      </div>
      <p style={paragraph}>
        If you didn't subscribe to our newsletter, you can safely ignore this email or click the unsubscribe link below.
      </p>
      <div style={footer}>
        <p style={footerText}>
          <a href="#unsubscribe" style={link}>
            Unsubscribe
          </a>{" "}
          |{" "}
          <a href="#privacy" style={link}>
            Privacy Policy
          </a>
        </p>
        <p style={footerText}>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
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
  padding: "16px",
  marginBottom: "20px",
}

const cardText = {
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

const link = {
  color: "#0070f3",
  textDecoration: "none",
}
