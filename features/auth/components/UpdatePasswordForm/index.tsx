// components/UpdatePasswordForm/index.tsx
import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';
import { gap8, gap16, mxAuto, p8, wMax } from '@/styles';
import { useSelector } from '@legendapp/state/react';

import { useAuthPresenter } from '../../AuthPresenter';
import { useUpdatePasswordFormStore } from './UpdatePasswordFormStore';

export function UpdatePasswordForm() {
  const form$ = useUpdatePasswordFormStore();

  const pwdTouched = useSelector(form$.touched.password);
  const confTouched = useSelector(form$.touched.confirmPassword);
  const pwdError = useSelector(form$.errors.password);
  const confError = useSelector(form$.errors.confirmPassword);
  const serverError = useSelector(form$.serverError);

  const { updatePassword, updateSession } = useAuthPresenter();

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
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
        onPress={updatePassword}
        disabled={!pwdTouched || !confTouched || !!pwdError || !!confError}
      />
    </Column>
  );
}
