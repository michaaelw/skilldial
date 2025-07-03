import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView, // 👈 new
} from 'react-native';
import { Button } from '@/components/Button';

import { Column } from '@/components/Column';
import { Input } from '@/components/Input';

import { Text } from '@/components/Text';
import { alignCenter, flex, fontBold, gap16, gap8, mxAuto, p8, wMax } from '@/styles';
import { useSelector } from '@legendapp/state/react';

import { useAuthPresenter } from '@/features/auth/AuthPresenter';
import { useSettingsFormStore } from './SettingsFormStore';

import { useTheme } from '@/components/ThemeProvider';

import { Separator } from '@/components/Separator';
import { Row } from '@/components/Row';
import { Spinner } from '@/components/icons/Spinner';
import { Link } from 'expo-router';
import { useUserStore } from '../../UserStore';

export function SettingsForm() {
  const formStore$ = useSettingsFormStore();
  const { store$: userStore$ } = useUserStore();
  const touched = useSelector(formStore$.touched);
  const errors = useSelector(formStore$.errors);
  const updatePending = useSelector(formStore$.updatePending);
  const { handleCreateAccount } = useAuthPresenter();
  const { theme } = useTheme();
  const isValid = useSelector(formStore$.isValid);
  const profile = useSelector(userStore$.profile);

  useEffect(() => {
    () => formStore$.reset();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[flex]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // tweak if you have a header
    >
      <ScrollView contentContainerStyle={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
        <Column style={[gap8]}>
          <Text>Account</Text>
          <Text style={{ color: theme.colors.lightText }}>
            Update your account settings. Set your preferred language and timezone.
          </Text>
        </Column>
        <Separator style={{ marginVertical: 0 }} />

        <Column style={[gap8]}>
          {touched.username && <Text variant="error">{errors.username}</Text>}

          <Column style={[flex]}>
            <Text>Username</Text>

            <Row style={[flex, alignCenter, gap8]}>
              <Input
                style={[flex]}
                placeholder="Username"
                defaultValue={profile?.username}
                onChangeText={formStore$.username.set}
                onBlur={() => formStore$.touched.username.set(true)}
              />
              {updatePending ? <Spinner /> : null}
            </Row>

            <Text style={{ color: theme.colors.lightText }}>
              This is your public display name. It can be a real name of a pseudonym. You can only
              change this once every 30 days.
            </Text>
          </Column>
        </Column>

        <Link href="/update-password?action=update" asChild>
          <Button variant="secondary" title="Change password" />
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
