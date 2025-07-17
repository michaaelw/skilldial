import { View } from "react-native";
import { ComponentProps } from "react";

type SeparatorProps = ComponentProps<typeof View>;

export function Separator(props: SeparatorProps) {
  return (
    <View
      className="border-b border-gray-300 dark:border-gray-700 my-6"
      {...props}
    />
  );
}
