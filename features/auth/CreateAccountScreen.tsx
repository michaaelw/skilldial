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
import { CreateAccountForm } from './components/CreateAccountForm';

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
      <CreateAccountForm />
    </Container>
  );
}
