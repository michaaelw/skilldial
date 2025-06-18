import { useSelector } from "@legendapp/state/react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { authStore$ } from "./AuthStore";

import * as authService from "./AuthService";
import { useCreateAccountFormStore } from "./components/CreateAccountForm";

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);
  const formStore$ = useCreateAccountFormStore();

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
    const form = formStore$.get();

    authService.createAccount({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form?.email,
      password: form?.password,
    }).then((res) => {
      console.log("account created successfully ", res);
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
    createAccount: authService.createAccount,
    handleCreateAccount,
    user,
    logout,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
