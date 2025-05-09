"use client"


import { useActionState } from "react"
import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/actions/subscribe/subscribe"
import { CheckCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import ReCAPTCHA from "react-google-recaptcha"

const initialState = {
  success: false,
  errors: {
    email: [],
    recaptcha: [],
    _form: [],
  },
}



export function SubscribeForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = (formData: FormData) => {
    formData.append("recaptchaToken", recaptchaToken || "")
    formAction(formData)
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  return (
    <div className="mt-10 space-y-4 lg:col-span-2 xl:mt-0">
      <h3 className="text-sm font-semibold text-foreground">Subscribe to our newsletter</h3>

      {state.success ? (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <AlertDescription className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Thank you for subscribing to our newsletter!</span>
          </AlertDescription>
        </Alert>
      ) : (
        <form action={handleSubmit} className="py-2 sm:flex sm:max-w-md flex-wrap">
          <div className="w-full min-w-0">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full"
              aria-invalid={state.errors.email.length > 0}
              aria-describedby={state.errors.email.length > 0 ? "email-error" : undefined}
            />
            {state.errors.email.length > 0 && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:shrink-0">

              <div className="flex justify-center my-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 
                    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                  onChange={handleRecaptchaChange}
                />
                {state.errors.recaptcha.length > 0 && (
                  <p className="text-sm text-red-500 mt-1">{state.errors.recaptcha[0]}</p>
                )}
              </div>


            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>


          </div>
          {state.errors.recaptcha.length > 0 && (
            <div className="mt-2 w-full">
              <p className="text-sm text-red-500">{state.errors.recaptcha[0]}</p>
            </div>
          )}
          {state.errors._form.length > 0 && (
            <div className="mt-2 w-full">
              <p className="text-sm text-red-500">{state.errors._form[0]}</p>
            </div>
          )}


          <div className="mt-2 w-full">
            <p className="text-xs text-muted-foreground">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noreferrer">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>


        </form>
      )}
    </div>
  )
}
