import React, { useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Input } from "~/components/ui/input";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";
import {
  alignCenter,
  flex,
  gap16,
  gap8,
  justifySpaceBetween,
  mxAuto,
  p8,
  textCenter,
  wMax,
} from "~/styles";
import { useSelector } from "@legendapp/state/react";
import { Link } from "expo-router";

import { useAuthPresenter } from "../../auth.presenter";
import { useLoginFormStore } from "./LoginFormStore";
import { GoogleIcon } from "~/components/icons/Google";
import AppleIcon from "~/components/icons/Apple";
import { XCompanyIcon } from "~/components/icons/XCompanyIcon";
import { CheckboxWithLabel } from "~/components/checkbox-with-label";

export function LoginForm() {
  const formStore$ = useLoginFormStore();
  const emailError = useSelector(formStore$.errors.email);
  const passwordError = useSelector(formStore$.errors.password);
  const emailTouched = useSelector(formStore$.touched.email);
  const passwordTouched = useSelector(formStore$.touched.password);
  const serverError = useSelector(formStore$.serverError);

  const { handleLogin } = useAuthPresenter();

  useEffect(() => {
    () => formStore$.reset();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[flex]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={[wMax, mxAuto, { maxWidth: 1200 }, gap16, p8]}
      >
        {Boolean(serverError) && (
          <Text className="text-red-500">{serverError}</Text>
        )}

        <Column style={[gap8]}>
          {emailTouched && <Text className="text-red-500">{emailError}</Text>}
          <Column>
            <Text>Email</Text>
            <Input
              placeholder="Email"
              onChangeText={formStore$.email.set}
              onBlur={() => formStore$.touched.email.set(true)}
            />
          </Column>
        </Column>

        <Column style={[gap8]}>
          {passwordTouched && (
            <Text className="text-red-500">{passwordError}</Text>
          )}
          <Column>
            <Text>Password</Text>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={formStore$.password.set}
              onBlur={() => formStore$.touched.password.set(true)}
            />
          </Column>
        </Column>

        <Row style={[alignCenter, justifySpaceBetween]}>
          <CheckboxWithLabel label="Remember for 30 days" />
          <Link href="/forgot-password">
            <Text>Forgot Password?</Text>
          </Link>
        </Row>

        <Button onPress={handleLogin}>
          <Text>Sign in</Text>
        </Button>

        <Text style={[textCenter]}>Or</Text>

        <Button variant="outline" className="flex-row gap-2 items-center">
          <GoogleIcon />
          <Text>Continue with Google</Text>
        </Button>

        <Button variant="outline" className="flex-row gap-2 items-center">
          <AppleIcon />
          <Text>Continue with Apple</Text>
        </Button>

        <Button variant="outline" className="flex-row gap-2 items-center">
          <XCompanyIcon />
          <Text>Continue with X</Text>
        </Button>

        <Text>
          By using Skilldial, you agree to the Terms of Service and Data
          Processing Agreement.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
