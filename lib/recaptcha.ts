// Utility function to verify reCAPTCHA token
export async function verifyRecaptcha(token: string | null): Promise<boolean> {
  if (!token) return false
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn("RECAPTCHA_SECRET_KEY is not set. Skipping verification.")
    return true // Skip verification in development if key is not set
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error)
    return false
  }
}
