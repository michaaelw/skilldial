import { Container } from '@/components/Container';
import { useIsMounted, useSelector } from '@legendapp/state/react';
import Animated, { useAnimatedSensor, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { useAuthPresenter } from './AuthPresenter';
import { useAuth } from './AuthContext';

import { LoginForm } from './components/LoginForm';

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
      <LoginForm />
    </Container>
  );
}
