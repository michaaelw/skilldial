import { useSelector } from "@legendapp/state/react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { authStore$ } from "./AuthStore";

import * as authService from "./AuthService";
import { router } from "expo-router";
import { useLoginFormStore } from "./components/LoginForm/LoginFormStore";
import { useCreateAccountFormStore } from "./components/CreateAccountForm/CreateAccountFormStore";
import * as SplashScreen from "expo-splash-screen";

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);
  const isLoading = useSelector(authStore$.isLoading);
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

    authStore$.isLoading.set(false);
    SplashScreen.hide();
  }

  function handleCreateAccount() {
    const form = createAccountFormStore$.get();

    authService.createAccount({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      console.log("create account result ", res);
      if (!res.error) {
        router.replace("/");
      }
    });
  }

  function handleLogin() {
    const form = loginFormStore$.get();

    authService.login({
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      if (!res.error) {
        router.replace("/");
      } else {
        loginFormStore$.serverError.set(res.error.message);
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
    isLoading,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
