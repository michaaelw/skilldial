//import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { getStorageAdapter } from '@/app/lib/storageAdapter';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

const storage = getStorageAdapter();
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
