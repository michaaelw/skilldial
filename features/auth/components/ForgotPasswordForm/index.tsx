import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';
import { gap8, gap16, mxAuto, p8, wMax } from '@/styles';
import { useSelector } from '@legendapp/state/react';

import { useAuthPresenter } from '../../AuthPresenter';
import { useForgotPasswordFormStore } from './ForgotPasswordFormStore';
import { Spinner } from '@/components/icons/Spinner';

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
      {!!serverError && <Text variant="error">{serverError}</Text>}

      <Column style={[gap8]}>
        {touched && !!error && <Text variant="error">{error}</Text>}
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

      <Button
        icon={isPending ? <Spinner /> : null}
        title="Reset Password"
        onPress={handleSubmit}
        disabled={!touched || !!error}
      />
    </Column>
  );
}
