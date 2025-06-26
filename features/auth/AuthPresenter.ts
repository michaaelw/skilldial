import { useSelector } from "@legendapp/state/react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { authStore$ } from "./AuthStore";

import * as authService from "./AuthService";
import { router } from "expo-router";
import { useLoginFormStore } from "./components/LoginForm/LoginFormStore";
import { useCreateAccountFormStore } from "./components/CreateAccountForm/CreateAccountFormStore";
import * as SplashScreen from "expo-splash-screen";
import { useForgotPasswordFormStore } from "./components/ForgotPasswordForm/ForgotPasswordFormStore";
import { useUpdatePasswordFormStore } from "./components/UpdatePasswordForm/UpdatePasswordFormStore";

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);
  const isLoading = useSelector(authStore$.isLoading);
  const createAccountFormStore$ = useCreateAccountFormStore();
  const loginFormStore$ = useLoginFormStore();
  const forgotPasswordFormStore$ = useForgotPasswordFormStore();
  const updatePasswordFormStore$ = useUpdatePasswordFormStore();

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
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      console.log("create account result ", res);
      if (!res.error) {
        router.replace("/");
      }
    });
  }

  function requestPasswordReset() {
    const form = forgotPasswordFormStore$.get();
    forgotPasswordFormStore$.isPending.set(true);
    authService.requestPasswordReset({ email: form.email }).then((res) => {
      forgotPasswordFormStore$.isPending.set(false);
      if (!res.error) {
        console.log("reset password response ", res);
        forgotPasswordFormStore$.emailSent.set(true);
      } else {
        forgotPasswordFormStore$.emailSent.set(false);
        forgotPasswordFormStore$.serverError.set(res.error?.message);
      }
    });
  }

  function updatePassword() {
    const form = updatePasswordFormStore$.get();

    updatePasswordFormStore$.isPending.set(true);
    return authService.updatePassword({ password: form.password }).then(
      (res) => {
        updatePasswordFormStore$.isPending.set(false);
        if (!res.error) {
          updatePasswordFormStore$.passwordUpdated.set(true);
          return true;
        } else {
          updatePasswordFormStore$.serverError.set(res?.error?.message);
          return false;
        }
      },
    );
  }

  function updateSession(
    { accessToken, refreshToken }: {
      accessToken: string;
      refreshToken: string;
    },
  ) {
    authService.setSession(accessToken, refreshToken);
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
    updateSession,
    user,
    requestPasswordReset,
    updatePassword,
    logout,
    isLoading,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
