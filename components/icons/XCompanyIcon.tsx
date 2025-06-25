import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export function XCompanyIcon({ color, size = 16 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_368_7435)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.63 15.334l-3.7-5.274-4.63 5.274H.34L6.06 8.82.34.667h5.03l3.487 4.97 4.37-4.97h1.959L9.73 6.878l5.93 8.456h-5.03zm2.182-1.487h-1.319L3.145 2.154h1.32l3.343 4.682.578.812 4.426 6.199z"
          fill="#242E36"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_368_7435">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
