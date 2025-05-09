'use client';

// import { useState } from "react"
import { useActionState, useRef, useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

import { submitContactForm } from '@/actions/contactus/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
  success: false,
  errors: {
    firstname: [],
    lastname: [],
    email: [],
    message: [],
    recaptcha: [],
    _form: []
  }
};

export function ContactForm() {
  // const [submitted, setSubmitted] = useState(false)

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (formData: FormData) => {
    formData.append('recaptchaToken', recaptchaToken || '');
    formAction(formData);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      {state.success ? (
        <Card className="mx-auto w-full max-w-lg shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 p-6 lg:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-center text-muted-foreground">
              Your message has been sent successfully. We'll get back to you as
              soon as possible.
            </p>
            <Button
              onClick={() => {
                // setSubmitted(false)
                window.location.reload();
              }}
              className="mt-4"
            >
              Send another message
            </Button>
          </CardContent>
        </Card>
      ) : (
        <form action={handleSubmit}>
          <Card className="mx-auto w-full max-w-lg shadow-lg">
            <CardContent className="flex flex-col gap-6 p-6 lg:p-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="John"
                  />
                  {state.errors.firstname.length > 0 && (
                    <p className="text-sm text-red-500">
                      {state.errors.firstname[0]}
                    </p>
                  )}
                </div>
                <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                  />
                  {state.errors.lastname.length > 0 && (
                    <p className="text-sm text-red-500">
                      {state.errors.lastname[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                />
                {state.errors.email.length > 0 && (
                  <p className="text-sm text-red-500">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here."
                  rows={6}
                />
                {state.errors.message.length > 0 && (
                  <p className="text-sm text-red-500">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <div className="flex justify-center my-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                    '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  }
                  onChange={handleRecaptchaChange}
                />
                {state.errors.recaptcha.length > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    {state.errors.recaptcha[0]}
                  </p>
                )}
              </div>

              {state.errors._form.length > 0 && (
                <div className="rounded-md bg-red-50 p-3">
                  <p className="text-sm text-red-500">
                    {state.errors._form[0]}
                  </p>
                </div>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </Button>
            </CardContent>
          </Card>
        </form>
      )}
    </>
  );
}
