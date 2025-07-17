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

import { Image, View } from "react-native";

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
} from "~/styles";

import { UpdatePasswordForm } from "./components/update-password-form";
import { useMedia } from "~/lib/useMedia";
import { Container } from "~/components/container";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";

export function UpdatePasswordScreen() {
  const { user } = useAuth();
  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

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
          <Text className="text-2xl">Update password?</Text>
          <Text>No worries, we'll send you reset instructions.</Text>
        </Column>

        <Column style={[flex]}>
          <UpdatePasswordForm />
        </Column>
      </View>
    </Container>
  );
}
