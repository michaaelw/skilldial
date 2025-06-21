import { Button } from '@/components/Button';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { flex, fontBold, gap16, gap8, justifyCenter, mxAuto, p8, textCenter, wMax } from '@/styles';
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

  const { handleLogin } = useAuthPresenter();

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      <Text variant="h1" style={[textCenter]}>
        Login to your account
      </Text>
      <Text style={[textCenter]}>Welcome back. Please enter your details.</Text>

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

      <Row>
        <CheckboxWithLabel label="Remember for 30 days" />
      </Row>

      <Button title="Sign in" onPress={handleLogin}></Button>

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
