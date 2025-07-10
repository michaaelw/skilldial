import { ThemeProvider } from '@/components/ThemeProvider';
import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '@/features/auth/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { PortalHost } from '@rn-primitives/portal';
import { Toaster } from '@/components/Sonner';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(landing)/index',
};

export default function Layout() {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationThemeProvider value={DefaultTheme}>
        <SafeAreaProvider>
          <ThemeProvider>
            <GestureHandlerRootView>
              <AuthProvider>
                <Stack screenOptions={{ headerShown: false }} />
                <PortalHost />
                <Toaster />
              </AuthProvider>
            </GestureHandlerRootView>
          </ThemeProvider>
        </SafeAreaProvider>
      </NavigationThemeProvider>
    </QueryClientProvider>
  );
}
