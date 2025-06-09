import { supabase } from '@/utils/supabase';
import { useSelector } from '@legendapp/state/react';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { useState } from 'react';
import { authStore$ } from './AuthStore';

export function useAuthPresenter() {
  const user = useSelector(authStore$.user);

  console.log('auth context user ', user);
  const logout = () => {
    supabase.auth.signOut();
  };

  function handleAuthStateChange(event: AuthChangeEvent, session: Session | null) {
    console.log('auth state changed ', event, session?.user);
    if (session?.user) {
      authStore$.user.set(session.user);
    } else {
      authStore$.user.set(null);
    }
  }

  function loginInAnonymously() {
    supabase.auth.signInAnonymously().then((res) => {
      console.log('login response ', res);
      authStore$.user.set(res.data.user);
    });
  }

  return {
    user,
    logout,
    loginInAnonymously,
    handleAuthStateChange,
  };
}
