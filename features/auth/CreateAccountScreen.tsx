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

export function CreateAccountScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));
  return (
    <Container>
      <Column style={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}>
        <Text variant="h1" style={[textCenter]}>
          Create an Account
        </Text>
        <Text style={[textCenter]}>Start your 30-day free trial.</Text>

        <Row style={[{ gap: 8 }]}>
          <Input placeholder="First name"></Input>
          <Input placeholder="Last name"></Input>
        </Row>

        <Row>
          <Input placeholder="Email"></Input>
        </Row>

        <Row>
          <Input placeholder="Email"></Input>
        </Row>

        <Row>
          <Input placeholder="Confirm password"></Input>
        </Row>

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
    </Container>
  );
}
