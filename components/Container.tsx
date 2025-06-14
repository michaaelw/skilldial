import { flex } from '@/styles';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from './ThemeProvider';
import { HeaderSection } from '@/features/landing/components/HeaderSection';

export const Container = ({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[flex, { backgroundColor: theme.colors.background }]}>
      {showHeader ? <HeaderSection /> : null}
      {children}
    </SafeAreaView>
  );
};
