import { useSelector } from "@legendapp/state/react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { authStore$ } from "./AuthStore";

import * as authService from "./AuthService";
import { useCreateAccountFormStore } from "./components/CreateAccountForm";
import { router } from "expo-router";
import { useLoginFormStore } from "./components/LoginForm";

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);
  const createAccountFormStore$ = useCreateAccountFormStore();
  const loginFormStore$ = useLoginFormStore();

  const logout = () => {
    authService.logout();
  };

  function handleAuthStateChange(
    event: AuthChangeEvent,
    session: Session | null,
  ) {
    if (session?.user) {
      authStore$.user.set(session.user);
    } else {
      authStore$.user.set(null);
    }
  }

  function handleCreateAccount() {
    const form = createAccountFormStore$.get();

    authService.createAccount({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      console.log("account created successfully ", res);
    });
  }

  function handleLogin() {
    const form = loginFormStore$.get();

    console.log("form ", form);

    authService.login({
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      console.log("login completed successfully ", res);
      if (!res.error) {
        router.replace("/");
      }
    });
  }

  function loginInAnonymously() {
    authService
      .loginInAnonymously()
      .then((res) => {
        authStore$.user.set(res.user);
      })
      .catch((err) => {
        authStore$.error.set(err.message);
      });
  }

  return {
    handleCreateAccount,
    handleLogin,
    user,
    logout,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
