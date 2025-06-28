import React from 'react';
import { Platform, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from './ThemeProvider';
import { HeaderSection } from '@/features/landing/components/HeaderSection';
import { flex } from '@/styles';
// If you use React-Navigation, uncomment:
// import { useHeaderHeight } from '@react-navigation/elements';

export const Container = ({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) => {
  const { theme } = useTheme();
  // const headerHeight = useHeaderHeight();      // optional

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({
        ios: 0, // or headerHeight
        android: 20, // tweak if your toolbar/status bar is taller
      })}>
      <SafeAreaView style={[styles.flex, { backgroundColor: theme.colors.background }]}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          style={styles.flex}>
          {showHeader && <HeaderSection />}
          {children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
