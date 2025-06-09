import { Stack, Link, Redirect } from 'expo-router';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { useIsMounted, useSelector } from '@legendapp/state/react';
import Animated, { useAnimatedSensor, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Column } from '@/components/Column';
import AppleIcon from '@/components/icons/Apple';
import { GoogleIcon } from '@/components/icons/Google';
import { Mail } from 'lucide-react-native';
import { useAuthPresenter } from './AuthPresenter';
import { useAuth } from './AuthContext';
import { gap16, gap8, p8, textCenter } from '@/styles';
import { Text } from '@/components/Text';

export function LoginScreen() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href={'/'} />;
  }

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const { loginInAnonymously } = useAuthPresenter();

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));
  return (
    <Container>
      <Column style={[gap16, p8]}>
        <Text variant="h1"> Get Started</Text>
        <Text>Create an account or login to keep your cards safe and access all features.</Text>
        <Button
          icon={<GoogleIcon color="red" />}
          variant="dark"
          title="Continue with Google"></Button>
        <Button
          icon={<AppleIcon color="white" />}
          variant="dark"
          title="Continue with Apple"></Button>
        <Button icon={<Mail color="white" />} variant="dark" title="Continue with Email"></Button>
        <Text style={[textCenter]}>Or</Text>
        <Button variant="ghost" title="Continue as guest" onPress={loginInAnonymously}></Button>

        <Text style={[textCenter]}>
          By signing up you agree to our Terms of Service and Privacy Policy
        </Text>
      </Column>
    </Container>
  );
}
