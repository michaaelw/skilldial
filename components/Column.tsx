import { forwardRef } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

type ColumnProps = ViewProps

export const Column = forwardRef<View, ColumnProps>(({ children, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.column, props.style]}>
      {children}
    </View>
  )
})

Column.displayName = 'Column'

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
})
