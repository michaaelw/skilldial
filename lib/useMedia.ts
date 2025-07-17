"use client";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

export const breakpoints = {
  sm: 0,
  md: 640,
  lg: 1024,
  xl: 1280,
};

type Breakpoints = typeof breakpoints;
type Media = Record<keyof Breakpoints, boolean>;

export function useMedia(): Media {
  const { width } = useWindowDimensions();
  const [media, setMedia] = useState<Media>({
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    setMedia({
      sm: true,
      md: width > breakpoints.md,
      lg: width > breakpoints.lg,
      xl: width > breakpoints.xl,
    });
  }, [width, breakpoints]);

  return media;
}
