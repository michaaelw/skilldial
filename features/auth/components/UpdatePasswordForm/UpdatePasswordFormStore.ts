import { useObservable, useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";

const updatePasswordSchema = z
  .object({
    password: z
      .string({ error: "Password is required" })
      .min(6, { error: "Min 6 characters" }),
    confirmPassword: z.string({
      error: "Please confirm your password",
    }),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    { path: ["confirmPassword"], message: "Passwords do not match" },
  );

type FormType = z.infer<typeof updatePasswordSchema>;

type UpdatePasswordFormStore = FormType & {
  errors: { password: string | null; confirmPassword: string | null };
  touched: { password: boolean; confirmPassword: boolean };
  serverError: string | null;
  isPending: boolean;
  passwordUpdated: boolean;
};

export const updatePasswordFormStore$ = useObservable<UpdatePasswordFormStore>({
  password: "",
  confirmPassword: "",
  errors: { password: null, confirmPassword: null },
  touched: { password: false, confirmPassword: false },
  serverError: null,
  isPending: false,
  passwordUpdated: false,
});

export function useUpdatePasswordFormStore() {
  function validateForm() {
    const data = {
      password: updatePasswordFormStore$.password.get(),
      confirmPassword: updatePasswordFormStore$.confirmPassword.get(),
    };

    const res = updatePasswordSchema.safeParse(data);

    if (res.error) {
      const errors = z.formatError(res.error);
      updatePasswordFormStore$.errors.password.set(
        errors.password?._errors?.[0] || null,
      );
      updatePasswordFormStore$.errors.confirmPassword.set(
        errors.confirmPassword?._errors?.[0] || null,
      );
    } else {
      updatePasswordFormStore$.errors.password.set(null);
      updatePasswordFormStore$.errors.confirmPassword.set(null);
    }
  }

  useObserve(validateForm);

  return updatePasswordFormStore$;
}
