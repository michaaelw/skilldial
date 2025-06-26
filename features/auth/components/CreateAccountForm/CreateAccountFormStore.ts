import { observable } from "@legendapp/state";
import { useObservable, useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";

const signupSchema = z
  .object({
    email: z.email({ error: "Email not valid" }),
    password: z.string({ error: "Password is required" }).min(3, {
      error: "Min 3 characters",
    }),
    confirmPassword: z.string({ error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormType = z.infer<typeof signupSchema>;
type SignupFormStore = FormType & {
  errors: { [K in keyof FormType]: string | null };
  touched: { [K in keyof FormType]: boolean };
  isValid: boolean;
};

const formStore$ = observable<SignupFormStore>({
  email: "",
  password: "",
  confirmPassword: "",
  isValid: false,
  errors: {
    email: null,
    password: null,
    confirmPassword: null,
  },
  touched: {
    email: false,
    password: false,
    confirmPassword: false,
  },
});

export function useCreateAccountFormStore() {
  function validateForm() {
    const email = formStore$.email.get();
    const password = formStore$.password.get();
    const confirmPassword = formStore$.confirmPassword.get();

    let result = signupSchema.safeParse({
      email,
      password,
      confirmPassword,
    });

    if (result.error) {
      formStore$.isValid.set(false);
      const errors = z.formatError(result.error);
      formStore$.errors.email.set(errors.email?._errors?.[0] || null);
      formStore$.errors.password.set(errors.password?._errors?.[0] || null);
      formStore$.errors.confirmPassword.set(
        errors.confirmPassword?._errors?.[0] || null,
      );
    } else {
      formStore$.errors.email.set(null);
      formStore$.errors.password.set(null);
      formStore$.errors.confirmPassword.set(null);
      formStore$.isValid.set(true);
    }
  }

  useObserve(() => {
    validateForm();
  });

  return formStore$;
}
