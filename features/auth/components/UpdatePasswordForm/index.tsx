// components/UpdatePasswordForm/index.tsx
import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';
import { gap8, gap16, mxAuto, p8, wMax } from '@/styles';
import { useSelector } from '@legendapp/state/react';

import { useAuthPresenter } from '../../AuthPresenter';
import { useUpdatePasswordFormStore } from './UpdatePasswordFormStore';
import { AlertDialog, AlertRef } from '@/components/AlertDialog';
import { useRef } from 'react';
import { router } from 'expo-router';
import { Spinner } from '@/components/icons/Spinner';

export function UpdatePasswordForm() {
  const form$ = useUpdatePasswordFormStore();

  const isPending = useSelector(form$.isPending);
  const pwdTouched = useSelector(form$.touched.password);
  const confTouched = useSelector(form$.touched.confirmPassword);
  const pwdError = useSelector(form$.errors.password);
  const confError = useSelector(form$.errors.confirmPassword);
  const serverError = useSelector(form$.serverError);
  const verified = useSelector(form$.verified);

  const { updatePassword } = useAuthPresenter();

  const alertRef = useRef<AlertRef>(null);

  const handleUpdatePassword = () => {
    updatePassword().then((res) => {
      if (res) {
        alertRef.current
          ?.show(
            'Password reset',
            'Your password has been successfully reset. Click below to log in magically.'
          )
          .then((res) => {
            router.replace('/');
          });
      }
    });
  };

  if (!verified && serverError) {
    return (
      <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
        <Text>{serverError}</Text>
      </Column>
    );
  }

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      <AlertDialog ref={alertRef} />
      {!!serverError && <Text variant="error">{serverError}</Text>}

      <Column style={[gap8]}>
        {pwdTouched && !!pwdError && <Text variant="error">{pwdError}</Text>}
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
        {confTouched && !!confError && <Text variant="error">{confError}</Text>}
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
        title="Update Password"
        icon={isPending ? <Spinner /> : null}
        onPress={handleUpdatePassword}
        disabled={!!pwdError || !!confError}
      />
    </Column>
  );
}
