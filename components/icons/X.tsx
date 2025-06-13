import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export function XIcon({ color = '#2B2B2B', size = 63 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 63 63" fill="none" color={color}>
      <Rect x={1.5} y={1.5} width={60} height={60} rx={30} fill={color} />
      <Path opacity={0.2} d="M1.5 1.5l60 60M1.5 61.5l60-60" stroke="#fff" strokeLinecap="square" />
    </Svg>
  );
}
