import type * as React from "react"

export interface ThankYouEmailData {
  name: string
}

export const ThankYouEmail: React.FC<ThankYouEmailData> = ({ name }) => {
  return (
    <div style={container}>
      <h1 style={heading}>Thank You for Contacting Us!</h1>
      <p style={paragraph}>Hello {name},</p>
      <p style={paragraph}>
        Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
      </p>
      <p style={paragraph}>
        In the meantime, if you have any urgent questions, please don't hesitate to call us directly.
      </p>
      <div style={footer}>
        <p style={footerText}>Best regards,</p>
        <p style={footerText}>The Team</p>
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
