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

export function CreateAccountForm() {
  const formStore$ = useFormStore();
  const touched = useSelector(formStore$.touched);
  const errors = useSelector(formStore$.errors);

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      <Text variant="h1" style={[textCenter]}>
        Create an Account
      </Text>
      <Text style={[textCenter]}>Start your 30-day free trial.</Text>
      <Column style={[gap8]}>
        {touched.firstName && <Text variant="error">{errors.firstName}</Text>}

        <Input
          placeholder="First name"
          onChangeText={formStore$.firstName.set}
          onBlur={() => formStore$.touched.firstName.set(true)}
        />
        {touched.lastName && <Text variant="error">{errors.lastName}</Text>}
        <Input
          placeholder="Last name"
          onChangeText={formStore$.lastName.set}
          onBlur={() => formStore$.touched.lastName.set(true)}
        />
      </Column>

      <Column style={[gap8]}>
        {touched.email && <Text variant="error">{errors.email}</Text>}
        <Input
          placeholder="Email"
          onChangeText={formStore$.email.set}
          onBlur={() => formStore$.touched.email.set(true)}
        />
      </Column>

      <Column style={[gap8]}>
        {touched.password && <Text variant="error">{errors.password}</Text>}
        <Input
          placeholder="Password"
          onChangeText={formStore$.password.set}
          onBlur={() => formStore$.touched.password.set(true)}
        />
      </Column>

      <Column style={[gap8]}>
        {touched.confirmPassword && <Text variant="error">{errors.confirmPassword}</Text>}
        <Input
          placeholder="Confirm password"
          onChangeText={formStore$.confirmPassword.set}
          onBlur={() => formStore$.touched.confirmPassword.set(true)}
        />
      </Column>

      <Row>
        <CheckboxWithLabel label="Subscribe to our weekly newsletter" />
      </Row>

      <Button title="Signup"></Button>

      <Link href="/login" style={[flex]}>
        <Row style={[flex, wMax, justifyCenter]}>
          <Text>
            Already have an accont? <Text style={[fontBold]}>Login</Text>
          </Text>
        </Row>
      </Link>
    </Column>
  );
}

const signupSchema = z
  .object({
    firstName: z.string().min(1, { error: 'First name is required' }),
    lastName: z.string().min(1, { error: 'Last name is required' }),
    email: z.email({ error: 'Email not valid' }),
    password: z.string({ error: 'Password is required' }).min(3, { error: 'Min 3 characters' }),
    confirmPassword: z.string({ error: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormType = z.infer<typeof signupSchema>;
type SignupFormStore = FormType & {
  errors: { [K in keyof FormType]: string | null };
  touched: { [K in keyof FormType]: boolean };
};

function useFormStore() {
  const formStore$ = useObservable<SignupFormStore>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    errors: { email: null, password: null, firstName: null, lastName: null, confirmPassword: null },
    touched: {
      email: false,
      password: false,
      firstName: false,
      lastName: false,
      confirmPassword: false,
    },
  });

  function validateForm() {
    const email = formStore$.email.get();
    const password = formStore$.password.get();
    const confirmPassword = formStore$.confirmPassword.get();
    const firstName = formStore$.firstName.get();
    const lastName = formStore$.lastName.get();

    let result = signupSchema.safeParse({ email, password, firstName, lastName, confirmPassword });

    if (result.error) {
      const errors = z.formatError(result.error);
      formStore$.errors.email.set(errors.email?._errors?.[0] || null);
      formStore$.errors.password.set(errors.password?._errors?.[0] || null);
      formStore$.errors.confirmPassword.set(errors.confirmPassword?._errors?.[0] || null);
      formStore$.errors.firstName.set(errors.firstName?._errors?.[0] || null);
      formStore$.errors.lastName.set(errors.lastName?._errors?.[0] || null);
    } else {
      formStore$.errors.email.set(null);
      formStore$.errors.password.set(null);
      formStore$.errors.confirmPassword.set(null);
      formStore$.errors.firstName.set(null);
      formStore$.errors.lastName.set(null);
    }
  }

  useObserve(() => {
    validateForm();
  });

  return formStore$;
}
