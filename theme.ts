const sharedColors = {
  azureRadiance: "#007AFF",
  blue: "#1278F1",
  limedSpruce: "#38434D",
  cornflowerBlue: "#6366F1",
  lightText: "#aaa",
  astral: "#2E78B7",
  green: "#00C96D",
  white: "#ffffff",
  gold: "gold",
  red: "red",
  transparent: "transparent",
};

export const breakpoints = {
  sm: 0,
  md: 640,
  lg: 1024,
  xl: 1280,
};

const baseTheme = {
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  breakpoints,
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...sharedColors,
    typography: "#444",
    background: "white", // "#f7f7f7",
    card: "#fff",
    border: "#E2E8F0",
    input: "#f7f7f7",
    inputText: "#666",
    heading: "#666",
    tab: "#F1F5F9",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...sharedColors,
    heading: "gold",
    typography: "#ffffff",
    background: "#222",
    card: "#333",
    border: "#ddd",
    input: "#DDD",
    inputText: "#333",
    tab: "#222",
  },
};

// Now you only need to do this once:
export type Theme = typeof lightTheme;
