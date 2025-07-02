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
import { getStorageAdapter } from '@/utils/storageAdapter';

type Schemes = 'light' | 'dark' | null | undefined;
type ThemeContextType = {
  theme: Theme;
  currentScheme: Schemes;
  media: Record<keyof Theme['breakpoints'], boolean>;
  setCurrentScheme: Dispatch<SetStateAction<'light' | 'dark' | null | undefined>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  currentScheme: 'dark',
  media: { sm: true, md: false, lg: false, xl: false },
  setCurrentScheme: () => {},
});

const storage = getStorageAdapter();
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentScheme, setCurrentScheme] = useState<Schemes>(colorScheme);
  const [media, setMedia] = useState<Record<keyof Theme['breakpoints'], boolean>>({
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });
  const dimensions = useWindowDimensions();

  useEffect(() => {
    let storedTheme = storage.getItem('theme') as Schemes;

    setCurrentScheme(storedTheme);
  }, []);

  useEffect(() => {
    if (currentScheme) {
      storage.setItem('theme', currentScheme);
    }
  }, [currentScheme]);

  const theme = currentScheme === 'dark' ? darkTheme : lightTheme;
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
