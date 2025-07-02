import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, flex, justifyCenter } from '@/styles';
import { Loader2 } from 'lucide-react-native';
import { MotiView } from 'moti';
import { View } from 'react-native';
import { Easing } from 'react-native-reanimated';

export function LoadingSpinner() {
  const { theme } = useTheme();
  return (
    <View style={[{ backgroundColor: theme.colors.background }, flex, justifyCenter, alignCenter]}>
      <MotiView
        from={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1000,
          easing: Easing.linear,
        }}>
        <Loader2 color={theme.colors.typography} />
      </MotiView>
    </View>
  );
}
