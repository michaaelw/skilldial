import { observable } from "@legendapp/state";
import { useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";

const forgotPasswordSchema = z.object({
  email: z.email({ error: "Email not valid" }),
});

type FormType = z.infer<typeof forgotPasswordSchema>;

type ForgotPasswordFormStore = FormType & {
  errors: { email: string | null };
  touched: { email: boolean };
  serverError: string | null;
  emailSent: boolean;
  token: string;
  isPending: boolean;
};

export const forgotPasswordFormStore$ = observable<ForgotPasswordFormStore>({
  token: "",
  isPending: false,
  emailSent: false,
  email: "",
  errors: { email: null },
  touched: { email: false },

  serverError: null,
});

export function useForgotPasswordFormStore() {
  function validateForm() {
    const email = forgotPasswordFormStore$.email.get();

    const result = forgotPasswordSchema.safeParse({ email });

    if (result.error) {
      const errors = z.formatError(result.error);
      forgotPasswordFormStore$.errors.email.set(
        errors.email?._errors?.[0] || null,
      );
    } else {
      forgotPasswordFormStore$.errors.email.set(null);
    }
  }

  useObserve(validateForm);

  return forgotPasswordFormStore$;
}
