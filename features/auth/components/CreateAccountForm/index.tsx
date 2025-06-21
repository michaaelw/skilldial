import { Button } from '@/components/Button';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { flex, fontBold, gap16, gap8, justifyCenter, mxAuto, p8, textCenter, wMax } from '@/styles';
import { useSelector } from '@legendapp/state/react';
import { Link } from 'expo-router';

import { useAuthPresenter } from '../../AuthPresenter';
import { useCreateAccountFormStore } from './CreateAccountFormStore';

export function CreateAccountForm() {
  const formStore$ = useCreateAccountFormStore();
  const touched = useSelector(formStore$.touched);
  const errors = useSelector(formStore$.errors);
  const { handleCreateAccount } = useAuthPresenter();

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

      <Button title="Signup" onPress={handleCreateAccount}></Button>

      <Link href="/login" style={[flex]}>
        <Row style={[flex, wMax, justifyCenter]}>
          <Text>
            Already have an account? <Text style={[fontBold]}>Login</Text>
          </Text>
        </Row>
      </Link>
    </Column>
  );
}
