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
import { flex, fontBold, gap16, gap8, justifyCenter, mxAuto, p8, textCenter, wMax } from '@/styles';
import { Text } from '@/components/Text';
import { Row } from '@/components/Row';
import { Input } from '@/components/Input';
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel';

export function LoginScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const { loginInAnonymously } = useAuthPresenter();

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));
  return (
    <Container>
      <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
        <Text variant="h1" style={[textCenter]}>
          Login to your account
        </Text>
        <Text style={[textCenter]}>Welcome back. Please enter your details.</Text>

        <Row>
          <Input placeholder="Email"></Input>
        </Row>

        <Row>
          <Input placeholder="Password"></Input>
        </Row>

        <Row>
          <CheckboxWithLabel label="Remember for 30 days" />
        </Row>

        <Button title="Sign in"></Button>

        <Link href="/create-account" style={[flex]}>
          <Row style={[flex, wMax, justifyCenter]}>
            <Text>
              Don't have an account? <Text style={[fontBold]}>Signup</Text>
            </Text>
          </Row>
        </Link>
      </Column>
    </Container>
  );
}
