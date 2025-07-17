import { Container } from "~/components/container";
import {
  useIsMounted,
  useObservable,
  useSelector,
} from "@legendapp/state/react";
import Animated, {
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { useAuthPresenter } from "./auth.presenter";
import { useAuth } from "./auth.context";

import { LoginForm } from "./components/login-form";
import { Image, View } from "react-native";

import { flex, gap16, gap8, mxAuto, p16, p8, textCenter, wMax } from "~/styles";

import { router } from "expo-router";
import { useMedia } from "~/lib/useMedia";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Link } from "expo-router";

export function LoginScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const activeTab$ = useObservable<string>("sign-in");
  const activeTab = useSelector(activeTab$);

  const { loginInAnonymously } = useAuthPresenter();
  const media = useMedia();

  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [
      {
        translateY: isMounted
          ? withTiming(0, { duration: 1000 })
          : withTiming(100),
      },
    ],
  }));

  if (!isMounted) return null;

  return (
    <Container showHeader={false}>
      <View
        style={[
          flex,
          gap8,
          p16,
          { flexDirection: media?.md ? "row" : "column", maxWidth: 1000 },
          wMax,
          mxAuto,
        ]}
      >
        <Column style={[media.md && flex, gap16]}>
          <Image
            source={require("~/assets/skilldial-small.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text className="text-2xl">Sign In</Text>
          <Text>Use your SkillDial account</Text>
        </Column>

        <Column style={[flex]}>
          <Tabs
            value={activeTab}
            onValueChange={(value) => activeTab$.set(value)}
          >
            <TabsList className="justify-end flex-row bg-transparent">
              <TabsTrigger value="sign-up" asChild className="bg-gray-200">
                <Link href="/create-account">
                  <Text>Sign Up</Text>
                </Link>
              </TabsTrigger>
              <TabsTrigger value="sign-in">
                <Link href="/login">
                  <Text>Sign In</Text>
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <LoginForm />
        </Column>
      </View>
    </Container>
  );
}
