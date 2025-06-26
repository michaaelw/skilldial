import { supabase } from "@/utils/supabase";
import * as config from "@/config";

export async function loginInAnonymously() {
  const { data, error } = await supabase.auth.signInAnonymously();

  if (error) {
    throw error;
  }

  return data;
}

export async function logout() {
  let error = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

type CreateAccountInput = {
  email: string;
  password: string;
};

export async function createAccount(input: CreateAccountInput) {
  return supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {},
    },
  });
}

type RequestPasswordResetInput = {
  email: string;
};

export async function requestPasswordReset(input: RequestPasswordResetInput) {
  return supabase.auth.resetPasswordForEmail(input.email, {
    redirectTo: config.appURL + "/update-password",
  });
}

export async function updatePassword(input: { password: string }) {
  return supabase.auth.updateUser({ password: input.password });
}

export async function setSession(
  access_token: string,
  refresh_token: string,
) {
  return supabase.auth.setSession({
    access_token,
    refresh_token,
  });
}

type LoginInput = {
  email: string;
  password: string;
};

export async function login(input: LoginInput) {
  return supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });
}
