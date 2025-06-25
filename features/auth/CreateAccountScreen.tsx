import { Container } from '@/components/Container';
import { useIsMounted, useObservable, useSelector } from '@legendapp/state/react';
import Animated, { useAnimatedSensor, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { useAuthPresenter } from './AuthPresenter';
import { useAuth } from './AuthContext';

import { LoginForm } from './components/LoginForm';
import { Image, View } from 'react-native';
import { Column } from '@/components/Column';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { flex, gap16, gap8, mxAuto, p16, p8, textCenter, wMax } from '@/styles';
import { Logo } from '@/components/icons/Logo';
import { Row } from '@/components/Row';
import { Button } from '@/components/Button';
import { TabBar } from '@/components/TabBar';
import { CreateAccountForm } from './components/CreateAccountForm';
import { router } from 'expo-router';

export function CreateAccountScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const activeTab$ = useObservable<string>();
  const activeTab = useSelector(activeTab$);

  const { loginInAnonymously } = useAuthPresenter();
  const { media } = useTheme();

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [{ translateY: isMounted ? withTiming(0, { duration: 1000 }) : withTiming(100) }],
  }));
  return (
    <Container showHeader={false}>
      <View
        style={[
          flex,
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
          <Text variant="h2">Create an account</Text>
          <Text>Turn up the dial on your knowledge</Text>
        </Column>

        <Column style={[flex]}>
          <TabBar
            tabs={[
              { key: '/create-account', label: 'Sign Up' },
              { key: '/login', label: 'Sign In' },
            ]}
            defaultActive="/create-account"
            onChange={(k) => router.replace(k as never)}
          />
          <CreateAccountForm />
        </Column>
      </View>
    </Container>
  );
}
