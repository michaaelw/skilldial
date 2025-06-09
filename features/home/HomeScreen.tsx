import { Stack, Link, Redirect } from 'expo-router';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Text } from 'react-native';
import { useIsMounted, useSelector } from '@legendapp/state/react';
import Animated, { useAnimatedSensor, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useAuth } from '../auth/AuthContext';

export function HomeScreen() {
  const { user, logout } = useAuth();
  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);
  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));

  console.log('home user ', user);
  if (!user) {
    return <Redirect href={'/login'} />;
  }

  return (
    <Container>
      <Animated.Text style={style}>Home</Animated.Text>
      <Button title="Logout" onPress={logout}></Button>
    </Container>
  );
}
