// TabBar.tsx
import React, { useState } from 'react';
import { Row } from './Row'; // or: `import Row from "@/components/Row"`
import { Button } from './Button'; // swap with your design-system button
import { Pressable } from 'react-native';
import { Text } from './Text';
import { useTheme } from './ThemeProvider';
import { p8 } from '@/styles';

/**
 * Describe a single tab the caller wants to show.
 * Extend this however you like (icons, tooltips, href, etc.).
 */
export interface TabItem {
  key: string;
  label: string;
  /** If you need a custom render (icon + label, etc.) you can provide it. */
  render?: (active: boolean) => React.ReactNode;
  /** Disable a tab (e.g. behind a paywall). */
  disabled?: boolean;
}

export interface TabBarProps {
  /** Tabs to render, in order. */
  tabs: TabItem[];
  /** Start with this tab selected. */
  defaultActive?: string;
  /** Called every time selection changes. */
  onChange?: (key: string) => void;
  /** Optional: gap between buttons (fallback = 8 px). */
  gap?: number;
}

/**
 * Generic, right-aligned tab bar.
 *
 * Example:
 * ```tsx
 * <TabBar
 *   tabs={[
 *     { key: "signup", label: "Sign Up" },
 *     { key: "signin", label: "Sign In" },
 *   ]}
 *   defaultActive="signup"
 *   onChange={setTab}
 * />
 * ```
 */
export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  defaultActive = tabs[0]?.key,
  onChange,
  gap = 0,
}) => {
  const [active, setActive] = useState<string>(defaultActive);
  const { theme } = useTheme();

  function handlePress(key: string, disabled?: boolean) {
    if (disabled) return;
    setActive(key);
    onChange?.(key);
  }

  return (
    <Row
      style={[{ borderRadius: 8, alignSelf: 'flex-end', gap, backgroundColor: theme.colors.tab }]}>
      {tabs.map(({ key, label, render, disabled }) => {
        const isActive = key === active;

        return (
          <Pressable
            key={key}
            disabled={disabled}
            onPress={() => handlePress(key, disabled)}
            style={{
              padding: 8,
              margin: 4,
              backgroundColor: isActive ? theme.colors.card : theme.colors.tab,
              opacity: disabled ? 0.4 : isActive ? 1 : 0.7,
            }}>
            {/* If a custom renderer is provided, use it; otherwise just show text */}
            {render ? render(isActive) : <Text>{label}</Text>}
          </Pressable>
        );
      })}
    </Row>
  );
};
