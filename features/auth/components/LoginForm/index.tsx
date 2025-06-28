import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView, // 👈 new
} from 'react-native';
import { Button } from '@/components/Button';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';
import { Column } from '@/components/Column';
import { Input } from '@/components/Input';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import {
  alignCenter,
  flex,
  gap16,
  gap8,
  justifySpaceBetween,
  mxAuto,
  p8,
  textCenter,
  wMax,
} from '@/styles';
import { useSelector } from '@legendapp/state/react';
import { Link } from 'expo-router';

import { useAuthPresenter } from '../../AuthPresenter';
import { useLoginFormStore } from './LoginFormStore';
import { GoogleIcon } from '@/components/icons/Google';
import AppleIcon from '@/components/icons/Apple';
import { XCompanyIcon } from '@/components/icons/XCompanyIcon';
import { useTheme } from '@/components/ThemeProvider';

export function LoginForm() {
  const { theme } = useTheme();
  const formStore$ = useLoginFormStore();
  const emailError = useSelector(formStore$.errors.email);
  const passwordError = useSelector(formStore$.errors.password);
  const emailTouched = useSelector(formStore$.touched.email);
  const passwordTouched = useSelector(formStore$.touched.password);
  const serverError = useSelector(formStore$.serverError);

  const { handleLogin } = useAuthPresenter();

  useEffect(() => {
    () => formStore$.reset();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[flex]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={[wMax, mxAuto, { maxWidth: 1200 }, gap16, p8]}>
        {Boolean(serverError) && <Text variant="error">{serverError}</Text>}

        <Column style={[gap8]}>
          {emailTouched && <Text variant="error">{emailError}</Text>}
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
          {passwordTouched && <Text variant="error">{passwordError}</Text>}
          <Column>
            <Text>Password</Text>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={formStore$.password.set}
              onBlur={() => formStore$.touched.password.set(true)}
            />
          </Column>
        </Column>

        <Row style={[alignCenter, justifySpaceBetween]}>
          <CheckboxWithLabel label="Remember for 30 days" />
          <Link href="/forgot-password">
            <Text>Forgot Password?</Text>
          </Link>
        </Row>

        <Button title="Sign in" onPress={handleLogin} />

        <Text style={[textCenter]}>Or</Text>

        <Button variant="outline" icon={<GoogleIcon />} title="Continue with Google" />
        <Button
          variant="outline"
          icon={<AppleIcon color={theme.colors.typography} />}
          title="Continue with Apple"
        />
        <Button variant="outline" icon={<XCompanyIcon />} title="Continue with X" />

        <Text>
          By using Skilldial, you agree to the Terms of Service and Data Processing Agreement.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
