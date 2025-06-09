'use client';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useColorScheme, useWindowDimensions } from 'react-native';
import { lightTheme, darkTheme, Theme } from '@/theme';

type Schemes = 'light' | 'dark' | null | undefined;
type ThemeContextType = {
  theme: Theme;
  currentScheme: Schemes;
  media: Record<keyof Theme['breakpoints'], boolean>;
  setCurrentScheme: Dispatch<SetStateAction<'light' | 'dark' | null | undefined>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  currentScheme: 'light',
  media: { sm: true, md: false, lg: false, xl: false },
  setCurrentScheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentScheme, setCurrentScheme] = useState<Schemes>(null);
  const [effectiveColorScheme, setEffectiveColorScheme] = useState(
    currentScheme === null ? 'light' : currentScheme
  );
  const [media, setMedia] = useState<Partial<Record<keyof Theme['breakpoints'], boolean>>>({});
  const dimensions = useWindowDimensions();

  const theme = effectiveColorScheme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    if (dimensions.width > theme.breakpoints.md) {
      setMedia((media) => ({ ...media, md: true }));
    } else {
      setMedia((media) => ({ ...media, md: false }));
    }

    if (dimensions.width > theme.breakpoints.lg) {
      setMedia((media) => ({ ...media, lg: true }));
    } else {
      setMedia((media) => ({ ...media, lg: false }));
    }

    if (dimensions.width > theme.breakpoints.xl) {
      setMedia((media) => ({ ...media, xl: true }));
    } else {
      setMedia((media) => ({ ...media, xl: false }));
    }
  }, [dimensions.width]);

  useEffect(() => {
    setCurrentScheme(colorScheme);
    setEffectiveColorScheme(currentScheme === null ? 'light' : currentScheme);
  }, [currentScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setCurrentScheme, currentScheme, media }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeProvider is necessary');
  }

  return context;
};
