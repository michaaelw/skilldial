//require('@dotenvx/dotenvx').config({ path: isDev ? '.env.development' : '.env.production' });

const isDev = process.env.EXPO_PUBLIC_APP_VARIANT === 'dev';

module.exports = ({ config }) => {
  return {
    ...config,
    name: isDev ? 'Skill Dial Dev' : 'Skill Dial',
    slug: isDev ? 'skill-dial-dev' : 'skill-dial',
    ios: {
      ...config.ios,
      bundleIdentifier: isDev ? 'com.skilldial.app.dev3' : 'com.skilldial.app',
    },
    android: {
      ...config.android,
      package: isDev ? 'com.skilldial.app.dev' : 'com.skilldial.app',
    },

    extra: {
      router: {
        origin: false,
      },
      supabaseURL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      eas: {
        projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
      },
    },
  };
};
