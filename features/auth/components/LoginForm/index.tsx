import { Button } from '@/components/Button';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import {
  alignCenter,
  flex,
  fontBold,
  gap16,
  gap8,
  justifyCenter,
  justifySpaceBetween,
  mxAuto,
  p8,
  textCenter,
  wMax,
} from '@/styles';
import { useObservable, useObserve, useSelector } from '@legendapp/state/react';
import { Link } from 'expo-router';

import { useAuthPresenter } from '../../AuthPresenter';
import { useLoginFormStore } from './LoginFormStore';

export function LoginForm() {
  const formStore$ = useLoginFormStore();
  const emailError = useSelector(formStore$.errors.email);
  const passwordError = useSelector(formStore$.errors.password);
  const emailTouched = useSelector(formStore$.touched.email);
  const passwordTouched = useSelector(formStore$.touched.password);
  const serverError = useSelector(formStore$.serverError);

  const { handleLogin } = useAuthPresenter();

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 1200 }, gap16, p8]}>
      {Boolean(serverError) && <Text variant="error">{serverError}</Text>}
      <Column style={[gap8]}>
        {emailTouched && <Text variant="error">{emailError}</Text>}
        <Input
          placeholder="Email"
          onChangeText={formStore$.email.set}
          onBlur={() => formStore$.touched.email.set(true)}></Input>
      </Column>

      <Column style={[gap8]}>
        {passwordTouched && <Text variant="error">{passwordError}</Text>}
        <Input
          placeholder="Password"
          onChangeText={formStore$.password.set}
          onBlur={() => formStore$.touched.password.set(true)}></Input>
      </Column>

      <Row style={[alignCenter, justifySpaceBetween]}>
        <CheckboxWithLabel label="Remember for 30 days" />
        <Link href="/forgot-password">
          <Text>Forgot Password?</Text>
        </Link>
      </Row>

      <Button title="Sign in" onPress={handleLogin}></Button>

      <Text style={[textCenter]}>Or</Text>

      <Button title="Continue with Google"></Button>
      <Button title="Continue with Apple"></Button>
      <Button title="Continue with X"></Button>

      <Link href="/create-account" style={[flex]}>
        <Row style={[flex, wMax, justifyCenter]}>
          <Text>
            Don't have an account? <Text style={[fontBold]}>Sign up</Text>
          </Text>
        </Row>
      </Link>
    </Column>
  );
}
