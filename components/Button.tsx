import { forwardRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { useTheme } from './ThemeProvider';
import { Theme } from '@/theme';

type Variants = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  variant?: Variants;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ icon, iconAfter, disabled, variant = 'primary', title, style, ...touchableProps }, ref) => {
    const { theme } = useTheme();

    const containerStyle: ViewStyle = {
      ...styles.baseButton,
      ...getButtonVariantStyle(variant, theme),
    };

    let textStyle: TextStyle = {
      ...styles.baseText,
      ...getTextVariantStyle(variant, theme),
    };

    if (disabled) {
      textStyle = { ...textStyle, opacity: 0.5 };
    }

    return (
      <TouchableOpacity
        disabled={disabled}
        ref={ref}
        {...touchableProps}
        style={[containerStyle, style]}>
        {icon}
        {title && <Text style={textStyle}>{title}</Text>}
        {iconAfter}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    padding: 8,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  baseText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

// Helpers to style based on variant
function getButtonVariantStyle(variant: Variants, theme: Theme): ViewStyle {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.colors.blue,
      };
    case 'secondary':
      return {
        backgroundColor: theme.colors.cornflowerBlue,
      };
    case 'ghost':
      return {
        backgroundColor: theme.colors.transparent,
        elevation: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
      };
    case 'outline':
      return {
        backgroundColor: '#222',
        borderWidth: 1,
        borderColor: '#666',
        elevation: 0,
        paddingHorizontal: 24,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
      };
    default:
      return {};
  }
}

function getTextVariantStyle(variant: Variants, theme: Theme): TextStyle {
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'outline':
      return { color: theme.colors.white };
    case 'ghost':
      return { color: theme.colors.typography };
    default:
      return {};
  }
}
