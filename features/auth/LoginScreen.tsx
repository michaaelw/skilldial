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

export function LoginScreen() {
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
          p16,
          { flexDirection: media?.md ? 'row' : 'column', maxWidth: 1000 },
          wMax,
          mxAuto,
        ]}>
        <Column style={[flex, gap16]}>
          <Logo />
          <Text variant="h2">Sign In</Text>
          <Text>Use your SkillDial account</Text>
        </Column>

        <Column style={[flex]}>
          <TabBar
            tabs={[
              { key: 'signup', label: 'Sign Up' },
              { key: 'signin', label: 'Sign In' },
            ]}
            defaultActive="signup"
            onChange={(k) => activeTab$.set(k)}
          />
          {activeTab === 'signin' ? <LoginForm /> : <CreateAccountForm />}
        </Column>
      </View>
    </Container>
  );
}
