import ExpoConstants from "expo-constants";

export const appURL = ExpoConstants.expoConfig?.extra?.appURL as string;
export const supabaseURL = ExpoConstants.expoConfig?.extra
  ?.supabaseURL as string;
export const supabaseAnonKey = ExpoConstants.expoConfig?.extra
  ?.supabaseAnonKey as string;
