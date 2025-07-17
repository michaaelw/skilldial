// components/UpdatePasswordForm/index.tsx
import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { gap8, gap16, mxAuto, p8, wMax } from "~/styles";
import { useSelector } from "@legendapp/state/react";

import { useAuthPresenter } from "../../auth.presenter";
import { useUpdatePasswordFormStore } from "./update-password-form.store";
import { AlertDialog, AlertRef } from "~/components/alert-dialog";
import { useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Spinner } from "~/components/icons/Spinner";

export function UpdatePasswordForm() {
  const form$ = useUpdatePasswordFormStore();

  const isPending = useSelector(form$.isPending);
  const pwdTouched = useSelector(form$.touched.password);
  const confTouched = useSelector(form$.touched.confirmPassword);
  const pwdError = useSelector(form$.errors.password);
  const confError = useSelector(form$.errors.confirmPassword);
  const serverError = useSelector(form$.serverError);
  const verified = useSelector(form$.verified);

  const params = useLocalSearchParams<{ action?: "update" | "reset" }>();

  const { updatePassword } = useAuthPresenter();

  const alertRef = useRef<AlertRef>(null);

  const handleUpdatePassword = () => {
    updatePassword().then((res) => {
      if (res) {
        alertRef.current
          ?.show(
            params.action === "reset" ? "Password reset" : "Password Updated",
            params.action === "reset"
              ? "Your password has been successfully reset. Click below to log in magically."
              : "Your password has been updated successfully"
          )
          .then((res) => {
            router.replace("/");
          });
      }
    });
  };

  if (!verified && serverError && params.action === "reset") {
    return (
      <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
        <Text>{serverError}</Text>
      </Column>
    );
  }

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      <AlertDialog ref={alertRef} />
      {!!serverError && <Text className="text-red-500">{serverError}</Text>}

      <Column style={[gap8]}>
        {pwdTouched && !!pwdError && (
          <Text className="text-red-500">{pwdError}</Text>
        )}
        <Column>
          <Text>New Password</Text>
          <Input
            placeholder="New password"
            secureTextEntry
            onChangeText={form$.password.set}
            onBlur={() => {
              form$.touched.password.set(true);
            }}
          />
        </Column>
      </Column>

      <Column style={[gap8]}>
        {confTouched && !!confError && (
          <Text className="text-red-500">{confError}</Text>
        )}
        <Column>
          <Text>Confirm Password</Text>
          <Input
            placeholder="Confirm password"
            secureTextEntry
            onChangeText={form$.confirmPassword.set}
            onBlur={() => {
              form$.touched.confirmPassword.set(true);
            }}
          />
        </Column>
      </Column>

      <Button
        onPress={handleUpdatePassword}
        disabled={!!pwdError || !!confError}
      >
        {isPending ? <Spinner /> : null}
        <Text>Update Password</Text>
      </Button>
    </Column>
  );
}
