import { View, ViewProps } from "react-native";
import { cn } from "~/lib/utils";

export function Column({
  className,
  ...props
}: ViewProps & {
  ref?: React.RefObject<View>;
}) {
  return <View className={cn("flex flex-col", className)} {...props} />;
}
