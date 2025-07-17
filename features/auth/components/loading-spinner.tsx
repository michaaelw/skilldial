import { alignCenter, flex, justifyCenter } from "~/styles";
import { Loader2 } from "lucide-react-native";

import { View } from "react-native";
import { Easing } from "react-native-reanimated";
import { MotiView } from "moti";

export function LoadingSpinner() {
  return (
    <View style={[flex, justifyCenter, alignCenter]}>
      <MotiView
        from={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        transition={{
          loop: true,
          type: "timing",
          duration: 1000,
          easing: Easing.linear,
        }}
      >
        <Loader2 />
      </MotiView>
    </View>
  );
}
