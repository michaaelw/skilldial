import { View, ViewProps } from "react-native";
import { cn } from "~/lib/utils";

export function Row({
  className,
  ...props
}: ViewProps & {
  ref?: React.RefObject<View>;
}) {
  return <View className={cn("flex flex-row", className)} {...props} />;
}
