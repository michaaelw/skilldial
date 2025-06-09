import { supabase } from '@/utils/supabase';

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
