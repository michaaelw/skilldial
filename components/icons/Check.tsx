import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string // color of the circle
  checkColor?: string // color of the check
}

const CheckCircleFilled = ({
  size = 24,
  color = 'green',
  checkColor = 'white',
}: Props) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024" fill="none">
    {/* Circle background */}
    <Path
      fill={color}
      d="M512 65C265.9 65 65 265.9 65 512s200.9 447 447 447 447-200.9 447-447S758.1 65 512 65z"
    />
    {/* Checkmark */}
    <Path
      fill={checkColor}
      d="M745.1 378.6l-273.4 320a7.93 7.93 0 0 1-11.9.2L278.9 558a8 8 0 0 1-.7-11.3l39.6-47.1a8 8 0 0 1 11.3-.8l96.6 84.9 233.9-273.7a8 8 0 0 1 11.3-1l47.1 39.6a8 8 0 0 1 1 11.3z"
    />
  </Svg>
)

export default CheckCircleFilled
