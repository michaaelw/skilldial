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
import AppleIcon from '@/components/icons/Apple';
import { GoogleIcon } from '@/components/icons/Google';
import { useTheme } from '@/components/ThemeProvider';
import { XCompanyIcon } from '@/components/icons/XCompanyIcon';

export function CreateAccountForm() {
  const formStore$ = useCreateAccountFormStore();
  const touched = useSelector(formStore$.touched);
  const errors = useSelector(formStore$.errors);
  const { handleCreateAccount } = useAuthPresenter();
  const { theme } = useTheme();
  const isValid = useSelector(formStore$.isValid);

  return (
    <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
      {/*<Column style={[gap8]}>

        touched.firstName && <Text variant="error">{errors.firstName}</Text>}

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
      </Column> */}

      <Column style={[gap8]}>
        {touched.email && <Text variant="error">{errors.email}</Text>}

        <Column>
          <Text>Email</Text>
          <Input
            placeholder="Email"
            onChangeText={formStore$.email.set}
            onBlur={() => formStore$.touched.email.set(true)}
          />
        </Column>
      </Column>

      <Column style={[gap8]}>
        {touched.password && <Text variant="error">{errors.password}</Text>}

        <Column>
          <Text>Password</Text>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={formStore$.password.set}
            onBlur={() => formStore$.touched.password.set(true)}
          />
        </Column>
      </Column>

      <Column style={[gap8]}>
        {touched.confirmPassword && <Text variant="error">{errors.confirmPassword}</Text>}
        <Column>
          <Text>Confirm Password</Text>
          <Input
            secureTextEntry
            placeholder="Confirm password"
            onChangeText={formStore$.confirmPassword.set}
            onBlur={() => formStore$.touched.confirmPassword.set(true)}
          />
        </Column>
      </Column>

      <Button disabled={!isValid} title="Signup" onPress={handleCreateAccount}></Button>

      <Text style={[textCenter]}>Or</Text>

      <Button variant="outline" icon={<GoogleIcon />} title="Continue with Google"></Button>
      <Button
        variant="outline"
        icon={<AppleIcon color={theme.colors.typography} />}
        title="Continue with Apple"></Button>
      <Button variant="outline" icon={<XCompanyIcon />} title="Continue with X"></Button>

      <Text>
        By using Skilldial, you agree to the Terms of Service and Data Processing Agreement.
      </Text>
    </Column>
  );
}
