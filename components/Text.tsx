import { TextProps, Text as RNText, TextStyle, StyleSheet } from 'react-native'
import { useTheme } from './ThemeProvider'

type Props = TextProps & {
  variant?: keyof typeof variantStyles
}

export function Text({ style, variant = 'body', ...props }: Props) {
  const { theme } = useTheme()

  const defaultStyle: TextStyle = {
    color: theme.colors.typography,
  }
  return <RNText style={[defaultStyle, variantStyles[variant], style]} {...props} />
}

const variantStyles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 800,
  },
  h2: {
    fontSize: 32,
    fontWeight: 800,
  },
  h3: {
    fontSize: 24,
    fontWeight: 700,
  },
  h4: {
    fontSize: 16,
    fontWeight: 700,
  },
  body: {
    fontSize: 16,
  },
})
