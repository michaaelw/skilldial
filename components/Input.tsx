import React, { forwardRef } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

type Variant = 'primary' | 'secondary' | 'ghost';

type InputProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: Variant;
} & TextInputProps;

export const Input = forwardRef<TextInput, InputProps>(
  ({ leftIcon, rightIcon, variant = 'primary', style, ...inputProps }, ref) => {
    const variantStyle = getVariantStyle(variant);

    return (
      <View style={[styles.container, { flex: Platform.OS === 'web' ? 1 : 1 }]}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          ref={ref}
          {...inputProps}
          style={[styles.input, variantStyle, style]}
          placeholderTextColor={'#333'}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    );
  }
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  } as ViewStyle,

  input: {
    fontSize: 16,
    color: '#000',
    outlineColor: 'deepskyblue',
    borderRadius: 8,
    paddingHorizontal: 12,
    padding: 8,
    borderColor: '#333',
    borderWidth: 1,
    flex: 1,
  } as TextStyle,

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});

// Helper function to handle variant styles
function getVariantStyle(variant: Variant): TextStyle {
  switch (variant) {
    case 'primary':
      return { borderColor: 'white' };
    case 'secondary':
      return { borderColor: 'white' };
    case 'ghost':
      return { borderColor: 'transparent', backgroundColor: 'transparent' };
    default:
      return { borderColor: 'white' };
  }
}
