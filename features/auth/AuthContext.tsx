import { supabase } from '@/utils/supabase';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useAuthPresenter } from './AuthPresenter';

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  isLoading: true,
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }: PropsWithChildren) {
  const { user, handleAuthStateChange, logout, isLoading } = useAuthPresenter();

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(handleAuthStateChange);
    return () => {
      subscription?.subscription?.unsubscribe?.();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>{children}</AuthContext.Provider>
  );
}
