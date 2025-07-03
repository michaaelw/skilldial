import { View, ViewStyle } from 'react-native';
import { useTheme } from './ThemeProvider';
import { ComponentProps } from 'react';

type SeparatorProps = ComponentProps<typeof View>;

export function Separator(props: SeparatorProps) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
          marginVertical: 24,
        },
        props.style,
      ]}></View>
  );
}
