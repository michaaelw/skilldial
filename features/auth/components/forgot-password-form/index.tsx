import { gap8, gap16, mxAuto, p8, wMax } from "~/styles";
import { useSelector } from "@legendapp/state/react";

import { useAuthPresenter } from "../../auth.presenter";
import { useForgotPasswordFormStore } from "./forgot-password-form.store";
import { Spinner } from "~/components/icons/Spinner";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function ForgotPasswordForm() {
  const form$ = useForgotPasswordFormStore();

  const email = useSelector(form$.email);
  const touched = useSelector(form$.touched.email);
  const error = useSelector(form$.errors.email);
  const serverError = useSelector(form$.serverError);
  const isPending = useSelector(form$.isPending);

  const { requestPasswordReset } = useAuthPresenter(); // add this if it doesn’t exist

  async function handleSubmit() {
    requestPasswordReset();
  }

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      {!!serverError && <Text className="text-red-500">{serverError}</Text>}

      <Column style={[gap8]}>
        {touched && !!error && <Text className="text-red-500">{error}</Text>}
        <Column>
          <Text>Email</Text>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={form$.email.set}
            onBlur={() => {
              form$.touched.email.set(true);
            }}
          />
        </Column>
      </Column>

      <Button onPress={handleSubmit} disabled={!!error}>
        {isPending ? <Spinner /> : null}
        <Text>Reset Password</Text>
      </Button>
    </Column>
  );
}
