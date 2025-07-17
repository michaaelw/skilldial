import { useSelector } from "@legendapp/state/react";
import { AuthChangeEvent, EmailOtpType, Session } from "@supabase/supabase-js";
import { authStore$ } from "./auth.store";

import * as authService from "./auth.service";
import { router } from "expo-router";
import { useLoginFormStore } from "./components/login-form/LoginFormStore";
import { useCreateAccountFormStore } from "./components/create-account-form/create-account-form.store";
import * as SplashScreen from "expo-splash-screen";
import { useForgotPasswordFormStore } from "./components/forgot-password-form/forgot-password-form.store";
import { useUpdatePasswordFormStore } from "./components/update-password-form/update-password-form.store";

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

  function verifyOtp(
    { token, type, email }: {
      token: string;
      email: string;
      type: EmailOtpType;
    },
  ) {
    authService.verifyOtpWithToken({ token, type, email }).then((res) => {
      if (res.error) {
        updatePasswordFormStore$.serverError.set(res.error?.message);
      } else {
        router.push("/(auth)/update-password");
        updatePasswordFormStore$.verified.set(true);
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
    updateSession,
    user,
    verifyOtp,
    requestPasswordReset,
    updatePassword,
    logout,
    isLoading,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
