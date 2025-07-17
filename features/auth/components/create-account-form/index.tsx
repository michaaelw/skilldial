import React, { useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import {
  flex,
  fontBold,
  gap16,
  gap8,
  justifyCenter,
  mxAuto,
  p8,
  textCenter,
  wMax,
} from "~/styles";
import { useSelector } from "@legendapp/state/react";

import { useAuthPresenter } from "../../auth.presenter";
import { useCreateAccountFormStore } from "./create-account-form.store";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { GoogleIcon } from "~/components/icons/Google";
import AppleIcon from "~/components/icons/Apple";
import { XCompanyIcon } from "~/components/icons/XCompanyIcon";

export function CreateAccountForm() {
  const formStore$ = useCreateAccountFormStore();
  const touched = useSelector(formStore$.touched);
  const errors = useSelector(formStore$.errors);
  const { handleCreateAccount } = useAuthPresenter();

  const isValid = useSelector(formStore$.isValid);

  useEffect(() => {
    () => formStore$.reset();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[flex]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // tweak if you have a header
    >
      <ScrollView
        contentContainerStyle={[wMax, mxAuto, { maxWidth: 600 }, gap16, p8]}
      >
        <Column style={[gap8]}>
          {touched.email && (
            <Text className="text-red-500">{errors.email}</Text>
          )}

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
          {touched.password && (
            <Text className="text-red-500">{errors.password}</Text>
          )}

          <Column>
            <Text>Password</Text>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={formStore$.password.set}
              onBlur={() => formStore$.touched.password.set(true)}
            />
          </Column>
        </Column>

        <Column style={[gap8]}>
          {touched.confirmPassword && (
            <Text className="text-red-500">{errors.confirmPassword}</Text>
          )}
          <Column>
            <Text>Confirm Password</Text>
            <Input
              secureTextEntry
              placeholder="Confirm password"
              onChangeText={formStore$.confirmPassword.set}
              onBlur={() => formStore$.touched.confirmPassword.set(true)}
            />
          </Column>
        </Column>

        <Button disabled={!isValid} onPress={handleCreateAccount}>
          <Text>Signup</Text>
        </Button>

        <Text style={[textCenter]}>Or</Text>

        <Button variant="outline" className="flex-row gap-2">
          <GoogleIcon />

          <Text>Continue with Google</Text>
        </Button>

        <Button variant="outline" className="flex-row gap-2">
          <AppleIcon color={"black"} />
          <Text>Continue with Apple</Text>
        </Button>

        <Button variant="outline" className="flex-row gap-2">
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
