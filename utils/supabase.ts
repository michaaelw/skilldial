//import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, processLock } from "@supabase/supabase-js";
import { getStorageAdapter } from "~/utils/storageAdapter";
import { AppState, Platform } from "react-native";
import { Database } from "../database.types";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

console.log({ supabaseUrl, supabaseAnonKey });

const storage = getStorageAdapter();
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
});

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
