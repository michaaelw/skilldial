import { ThemeProvider } from '@/components/ThemeProvider';
import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '@/features/auth/AuthContext';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <NavigationThemeProvider value={DefaultTheme}>
      <ThemeProvider>
        <GestureHandlerRootView>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </AuthProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationThemeProvider>
  );
}
