import { Container } from '@/components/Container';
import { useIsMounted, useObservable, useSelector } from '@legendapp/state/react';
import Animated, { useAnimatedSensor, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { useAuthPresenter } from './AuthPresenter';
import { useAuth } from './AuthContext';

import { Image, View } from 'react-native';
import { Column } from '@/components/Column';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import {
  alignCenter,
  flex,
  gap16,
  gap8,
  justifySpaceBetween,
  mxAuto,
  p16,
  p8,
  textCenter,
  wMax,
} from '@/styles';

import { TabBar } from '@/components/TabBar';

import { router } from 'expo-router';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';
import { useForgotPasswordFormStore } from './components/ForgotPasswordForm/ForgotPasswordFormStore';
import { email } from 'zod/v4';
import { Button } from '@/components/Button';
import { ChevronLeft } from 'lucide-react-native';
import { Row } from '@/components/Row';
import { Spinner } from '@/components/icons/Spinner';

export function ForgotPasswordScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const activeTab$ = useObservable<string>();
  const activeTab = useSelector(activeTab$);

  const { loginInAnonymously, requestPasswordReset } = useAuthPresenter();

  const { media } = useTheme();

  const formStore$ = useForgotPasswordFormStore();
  const emailSent = useSelector(formStore$.emailSent);
  const email = useSelector(formStore$.email);

  const isPending = useSelector(formStore$.isPending);

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));

  if (emailSent) {
    return (
      <Container showHeader={false}>
        <View
          style={[
            flex,
            gap8,
            p16,
            { flexDirection: media?.md ? 'row' : 'column', maxWidth: 1000 },
            wMax,
            mxAuto,
          ]}>
          <Column style={[media.md && flex, gap16]}>
            <Image
              source={require('@/assets/skilldial-small.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text variant="h2">Check your email</Text>
            <Text>We sent a request link to {email}</Text>
          </Column>

          <Column style={[flex, gap8]}>
            <Button title="Open email app"></Button>

            <Button
              variant="ghost"
              icon={<ChevronLeft />}
              title="Back"
              onPress={() => {
                formStore$.emailSent.set(false);
              }}></Button>

            <Row style={[alignCenter, justifySpaceBetween]}>
              <Text>Didn't receive the email?</Text>
              <Button
                onPress={requestPasswordReset}
                icon={isPending ? <Spinner /> : null}
                title="Click to Resend"
                variant="ghost"></Button>
            </Row>
          </Column>
        </View>
      </Container>
    );
  }

  return (
    <Container showHeader={false}>
      <View
        style={[
          flex,
          gap8,
          p16,
          { flexDirection: media?.md ? 'row' : 'column', maxWidth: 1000 },
          wMax,
          mxAuto,
        ]}>
        <Column style={[media.md && flex, gap16]}>
          <Image
            source={require('@/assets/skilldial-small.png')}
            style={{ width: 50, height: 50 }}
          />
          <Text variant="h2">Forgot password?</Text>
          <Text>No worries, we'll send you reset instructions.</Text>
        </Column>

        <Column style={[flex]}>
          <ForgotPasswordForm />
        </Column>
      </View>
    </Container>
  );
}
