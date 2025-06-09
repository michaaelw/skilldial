import { forwardRef } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

type RowProps = ViewProps

export const Row = forwardRef<View, RowProps>(({ children, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.row, props.style]}>
      {children}
    </View>
  )
})

Row.displayName = 'Row'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})
