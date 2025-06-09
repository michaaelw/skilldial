import { useSelector } from '@legendapp/state/react';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { authStore$ } from './AuthStore';

import * as authService from './AuthService';

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);

  const logout = () => {
    authService.logout();
  };

  function handleAuthStateChange(event: AuthChangeEvent, session: Session | null) {
    if (session?.user) {
      authStore$.user.set(session.user);
    } else {
      authStore$.user.set(null);
    }
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
    user,
    logout,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
