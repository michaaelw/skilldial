import { ThemeProvider } from '@/components/ThemeProvider';
import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <NavigationThemeProvider value={DefaultTheme}>
      <ThemeProvider>
        <Stack />;
      </ThemeProvider>
    </NavigationThemeProvider>
  );
}
