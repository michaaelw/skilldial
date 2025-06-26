import { observable } from "@legendapp/state";
import { useObservable, useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";

const loginSchema = z.object({
  password: z.string({ error: "Password is required" }).min(3, {
    error: "Min 3 characters",
  }),
  email: z.email({ error: "Email not valid" }),
});

type FormType = z.infer<typeof loginSchema>;
type LoginFormStore = FormType & {
  errors: { [K in keyof FormType]: string | null };
  touched: { [K in keyof FormType]: boolean };
  serverError: string | null;
};

const formStore$ = observable<LoginFormStore>({
  email: "",
  password: "",
  errors: { email: null, password: null },
  touched: { email: false, password: false },
  serverError: null,
});

export function useLoginFormStore() {
  function validateForm() {
    const email = formStore$.email.get();
    const password = formStore$.password.get();

    let result = loginSchema.safeParse({ email, password });

    if (result.error) {
      const errors = z.formatError(result.error);
      formStore$.errors.email.set(errors.email?._errors?.[0] || null);
      formStore$.errors.password.set(errors.password?._errors?.[0] || null);
    } else {
      formStore$.errors.email.set(null);
      formStore$.errors.password.set(null);
    }
  }

  useObserve(() => {
    validateForm();
  });

  return formStore$;
}
