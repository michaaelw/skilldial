import { Button } from '@/components/Button';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { flex, fontBold, gap16, gap8, justifyCenter, mxAuto, p8, textCenter, wMax } from '@/styles';
import { useObservable, useObserve, useSelector } from '@legendapp/state/react';
import { Link } from 'expo-router';

import { z } from 'zod/v4';

export function LoginForm() {
  const formStore$ = useFormStore();
  const emailError = useSelector(formStore$.errors.email);
  const passwordError = useSelector(formStore$.errors.password);
  const emailTouched = useSelector(formStore$.touched.email);
  const passwordTouched = useSelector(formStore$.touched.password);

  const handleLogin = () => {};

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

const loginSchema = z.object({
  password: z.string({ error: 'Password is required' }).min(3, { error: 'Min 3 characters' }),
  email: z.email({ error: 'Email not valid' }),
});

type FormType = z.infer<typeof loginSchema>;
type LoginFormStore = FormType & {
  errors: { [K in keyof FormType]: string | null };
  touched: { [K in keyof FormType]: boolean };
};

function useFormStore() {
  const formStore$ = useObservable<LoginFormStore>({
    email: '',
    password: '',
    errors: { email: null, password: null },
    touched: { email: false, password: false },
  });

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
