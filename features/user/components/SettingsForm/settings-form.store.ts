import { observable } from "@legendapp/state";
import { useObservable, useObserve } from "@legendapp/state/react";
import { z } from "zod/v4";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import * as userService from "~/features/user/user.service";
import { toast } from "~/components/ui/Sonner";
import { useAuth } from "~/features/auth/auth.context";

const settingsSchema = z.object({
  username: z
    .string({ error: "Username is required" })
    .min(1, "Username is required"),
  email: z.email({ error: "Email not valid" }),
});

type FormType = z.infer<typeof settingsSchema>;
type SettingsFormStore = FormType & {
  errors: { [K in keyof FormType]: string | null };
  touched: { [K in keyof FormType]: boolean };
  serverError: string | null;
  isValid: boolean;
  updatePending: boolean;
  reset: () => void;
};

const formStore$ = observable<SettingsFormStore>({
  updatePending: false,
  username: "",
  email: "",
  isValid: false,
  serverError: null,
  errors: {
    username: null,
    email: null,
  },
  touched: {
    username: false,
    email: false,
  },
  reset: () => {
    formStore$.email.set("");

    formStore$.errors.set({
      email: null,
      username: null,
    });
    formStore$.touched.set({
      email: false,
      username: false,
    });
    formStore$.serverError.set(null);
  },
});

export function useSettingsFormStore() {
  const { user } = useAuth();
  const debouncedSaveUsername = debounce((params: any) => {
    formStore$.updatePending.set(true);
    Boolean(user?.id) &&
      userService
        .updateUsername({
          username: params.value,
          userId: user?.id!,
        })
        .then((res) => {
          formStore$.updatePending.set(false);

          if (res.error) {
            toast.error(
              res.error.message || "There was a problem updating your username",
              { position: "top-center" },
            );
          } else {
            toast.success("Username updated successfully", {
              position: "top-center",
            });
          }
        });
  }, 500);

  useEffect(() => {
    const unsubscribe = formStore$.username.onChange(debouncedSaveUsername);
    return () => {
      unsubscribe();
      debouncedSaveUsername.cancel();
    };
  }, [debouncedSaveUsername]);

  function validateForm() {
    const email = formStore$.email.get();
    const username = formStore$.username.get();

    let result = settingsSchema.safeParse({
      username,
      email,
    });

    if (result.error) {
      formStore$.isValid.set(false);
      const errors = z.formatError(result.error);
      formStore$.errors.username.set(errors?.username?._errors?.[0] || null);
      formStore$.errors.email.set(errors.email?._errors?.[0] || null);
    } else {
      formStore$.errors.username.set(null);
      formStore$.errors.email.set(null);

      formStore$.isValid.set(true);
    }
  }

  useObserve(() => {
    validateForm();
  });

  return formStore$;
}
