import type * as React from "react"

export interface NotificationEmailData {
  name: string
  email: string
  message: string
}

export const NotificationEmail: React.FC<NotificationEmailData> = ({ name, email, message }) => {
  return (
    <div style={container}>
      <h1 style={heading}>New Contact Form Submission</h1>
      <div style={card}>
        <h2 style={subheading}>Contact Details</h2>
        <div style={fieldContainer}>
          <p style={label}>Name:</p>
          <p style={value}>{name}</p>
        </div>
        <div style={fieldContainer}>
          <p style={label}>Email:</p>
          <p style={value}>{email}</p>
        </div>
        <div style={fieldContainer}>
          <p style={label}>Message:</p>
          <p style={value}>{message}</p>
        </div>
      </div>
      <div style={footer}>
        <p style={footerText}>This is an automated notification from your website's contact form.</p>
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

const card = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
}

const subheading = {
  color: "#444",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "16px",
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
  whiteSpace: "pre-wrap",
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
