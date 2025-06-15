import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useTheme } from './ThemeProvider';

type CheckboxProps = {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  label: string;
};

export const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = false,
  onCheckedChange,
  label,
}) => {
  const toggle = () => {
    onCheckedChange?.(!checked);
  };

  const { theme } = useTheme();
  return (
    <Pressable onPress={toggle} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.label, { color: theme.colors.typography }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: 'deepskyblue',
    borderColor: 'deepskyblue',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});
