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

import { ForgotPasswordForm } from "./components/forgot-password-form";
import { useForgotPasswordFormStore } from "./components/forgot-password-form/forgot-password-form.store";
import { email } from "zod/v4";

import { ChevronLeft } from "lucide-react-native";

import { Spinner } from "~/components/icons/Spinner";
import { useMedia } from "~/lib/useMedia";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Row } from "~/components/ui/row";

export function ForgotPasswordScreen() {
  const { user } = useAuth();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);

  const activeTab$ = useObservable<string>();
  const activeTab = useSelector(activeTab$);

  const { verifyOtp, requestPasswordReset } = useAuthPresenter();

  const media = useMedia();

  const formStore$ = useForgotPasswordFormStore();
  const emailSent = useSelector(formStore$.emailSent);
  const email = useSelector(formStore$.email);
  const token = useSelector(formStore$.token);

  const isPending = useSelector(formStore$.isPending);

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

  if (emailSent) {
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
            <Text className="text-2xl">Check your email</Text>
            <Text>We sent a request link to {email}</Text>
          </Column>

          <Column style={[flex, gap8]}>
            <Column style={[gap8]}>
              <Text>Enter token</Text>
              <Input placeholder="Token" onChangeText={formStore$.token.set} />

              <Button
                onPress={() => {
                  verifyOtp({ token, email, type: "recovery" });
                }}
              >
                <Text>Verify Token</Text>
              </Button>
            </Column>

            <Button
              variant="ghost"
              onPress={() => {
                formStore$.emailSent.set(false);
              }}
            >
              <ChevronLeft />
              <Text>Back</Text>
            </Button>

            <Row style={[alignCenter, justifySpaceBetween]}>
              <Text>Didn't receive the email?</Text>
              <Button onPress={requestPasswordReset} variant="ghost">
                {isPending ? <Spinner /> : null}
                <Text>Click to Resend</Text>
              </Button>
            </Row>
          </Column>
        </View>
      </Container>
    );
  }

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
          <Text className="text-2xl">Forgot password?</Text>
          <Text>No worries, we'll send you reset instructions.</Text>
        </Column>

        <Column style={[flex]}>
          <ForgotPasswordForm />
        </Column>
      </View>
    </Container>
  );
}
