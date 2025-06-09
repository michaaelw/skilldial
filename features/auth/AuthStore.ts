import { observable } from '@legendapp/state';
import { User } from '@supabase/supabase-js';

type AuthStore = {
  user: User | null;
  error?: string;
};

export const authStore$ = observable<AuthStore>({ user: null });
