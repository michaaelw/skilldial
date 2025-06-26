import { Loader2 } from 'lucide-react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export function Spinner() {
  return (
    <MotiView
      from={{ rotate: '0deg' }}
      animate={{ rotate: '360deg' }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 1000,
        easing: Easing.linear,
      }}>
      <Loader2 />
    </MotiView>
  );
}
