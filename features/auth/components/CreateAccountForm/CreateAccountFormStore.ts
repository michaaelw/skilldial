import { useObservable, useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";

const signupSchema = z
  .object({
    firstName: z.string().min(1, { error: "First name is required" }),
    lastName: z.string().min(1, { error: "Last name is required" }),
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
};

const formStore$ = useObservable<SignupFormStore>({
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  errors: {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    confirmPassword: null,
  },
  touched: {
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    confirmPassword: false,
  },
});

export function useCreateAccountFormStore() {
  function validateForm() {
    const email = formStore$.email.get();
    const password = formStore$.password.get();
    const confirmPassword = formStore$.confirmPassword.get();
    const firstName = formStore$.firstName.get();
    const lastName = formStore$.lastName.get();

    let result = signupSchema.safeParse({
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    });

    if (result.error) {
      const errors = z.formatError(result.error);
      formStore$.errors.email.set(errors.email?._errors?.[0] || null);
      formStore$.errors.password.set(errors.password?._errors?.[0] || null);
      formStore$.errors.confirmPassword.set(
        errors.confirmPassword?._errors?.[0] || null,
      );
      formStore$.errors.firstName.set(errors.firstName?._errors?.[0] || null);
      formStore$.errors.lastName.set(errors.lastName?._errors?.[0] || null);
    } else {
      formStore$.errors.email.set(null);
      formStore$.errors.password.set(null);
      formStore$.errors.confirmPassword.set(null);
      formStore$.errors.firstName.set(null);
      formStore$.errors.lastName.set(null);
    }
  }

  useObserve(() => {
    validateForm();
  });

  return formStore$;
}
