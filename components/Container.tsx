import { flex } from '@/styles';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from './ThemeProvider';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[flex, { backgroundColor: theme.colors.background }]}>
      {children}
    </SafeAreaView>
  );
};
