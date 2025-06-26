import ExpoConstants from "expo-constants";

export const appURL = "https://skill-dial-dev.expo.app";
export const supabaseURL = ExpoConstants.expoConfig?.extra
  ?.supabaseURL as string;
export const supabaseAnonKey = ExpoConstants.expoConfig?.extra
  ?.supabaseAnonKey as string;
