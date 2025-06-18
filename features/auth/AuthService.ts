import { supabase } from "@/utils/supabase";

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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export async function createAccount(input: CreateAccountInput) {
  return supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
      },
    },
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
