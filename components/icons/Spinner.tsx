import { Loader2 } from "lucide-react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export function Spinner() {
  const size = 24; // Loader2 is 24×24 ⇒ centre at (12, 12)

  return (
    <MotiView
      style={{ width: size, height: size }} // 1️⃣ make the box square
      from={{
        rotate: "0deg",
        transformOrigin: { x: "50%", y: "50%" }, // 2️⃣ spin around centre
      }}
      animate={{ rotate: "360deg" }}
      transition={{
        repeat: Infinity,
        repeatReverse: false,
        loop: true,
        type: "timing",
        duration: 1000,
        easing: Easing.linear,
      }}
    >
      {/* 3️⃣ tell react-native-svg the same pivot (optional but safer) */}
      <Loader2
        size={size}
        className="dark:text-white"
        originX={size / 2}
        originY={size / 2}
      />
    </MotiView>
  );
}
