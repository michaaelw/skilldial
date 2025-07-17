import { observable } from "@legendapp/state";
import { Pressable, View, Appearance, ColorSchemeName } from "react-native";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { MoonStar } from "~/lib/icons/MoonStar";
import { Sun } from "~/lib/icons/Sun";
import { useColorScheme } from "~/lib/useColorScheme";
import { syncObservable } from "@legendapp/state/sync";
import { ObservablePersistMMKV } from "@legendapp/state/persist-plugins/mmkv";
import { useObserve } from "@legendapp/state/react";
import { useEffect } from "react";

type ThemeStore = {
  currentScheme: "light" | "dark" | "system";
};

export const themeStore$ = observable<ThemeStore>({
  currentScheme: "system",
});

syncObservable(themeStore$, {
  persist: {
    name: "color-scheme",
    plugin: ObservablePersistMMKV,
  },
});

export function useThemeStore() {
  const { setColorScheme, colorScheme } = useColorScheme();

  useEffect(() => {
    themeStore$.currentScheme.set(colorScheme);
  }, []);

  useObserve(() => {
    const currentScheme = themeStore$.currentScheme.get();
    setColorScheme(currentScheme);
  });

  return themeStore$;
}

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
  }

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 active:opacity-70"
    >
      <View className="flex-1 aspect-square pt-0.5 justify-center items-start web:px-5">
        {isDarkColorScheme ? (
          <MoonStar className="text-foreground" size={23} strokeWidth={1.25} />
        ) : (
          <Sun className="text-foreground" size={24} strokeWidth={1.25} />
        )}
      </View>
    </Pressable>
  );
}
