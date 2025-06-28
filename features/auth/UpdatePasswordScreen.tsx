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

import { UpdatePasswordForm } from './components/UpdatePasswordForm';

import { useHandleResetLink } from './components/UpdatePasswordForm/useHandleResetLink';

export function UpdatePasswordScreen() {
  useHandleResetLink();
  const { user } = useAuth();
  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const { media } = useTheme();

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));

  if (!isMounted) return null;

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
          <Text variant="h2">Update password?</Text>
          <Text>No worries, we'll send you reset instructions.</Text>
        </Column>

        <Column style={[flex]}>
          <UpdatePasswordForm />
        </Column>
      </View>
    </Container>
  );
}
