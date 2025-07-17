// TabBar.tsx
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useMedia } from "~/lib/useMedia";
import { cn } from "~/lib/utils";
import { Text } from "./ui/text";
import { Row } from "./ui/row";

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

export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  defaultActive = tabs[0]?.key,
  onChange,
  gap = 0,
}) => {
  const [active, setActive] = useState<string>(defaultActive);
  const media = useMedia();

  function handlePress(key: string, disabled?: boolean) {
    if (disabled) return;
    setActive(key);
    onChange?.(key);
  }

  return (
    <Row
      className="bg-gray-400"
      style={[
        {
          borderRadius: 8,
          alignSelf: "flex-end",
          gap,
        },
      ]}
    >
      {tabs.map(({ key, label, render, disabled }) => {
        const isActive = key === active;

        return (
          <Pressable
            key={key}
            disabled={disabled}
            className={cn(isActive && "bg-white", "bg-gray-400")}
            onPress={() => handlePress(key, disabled)}
            style={{
              padding: 8,
              margin: 4,
              opacity: disabled ? 0.4 : isActive ? 1 : 0.7,
            }}
          >
            {/* If a custom renderer is provided, use it; otherwise just show text */}
            {render ? render(isActive) : <Text>{label}</Text>}
          </Pressable>
        );
      })}
    </Row>
  );
};
