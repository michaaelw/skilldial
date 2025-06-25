import * as React from 'react';
import Svg, { Mask, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export function Logo({ color, size = 50 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={50}
        height={50}>
        <Path
          d="M0 19.511C0 12.61 0 9.159 1.364 6.532a12.119 12.119 0 015.168-5.168C9.16 0 12.61 0 19.511 0h10.978c6.901 0 10.352 0 12.979 1.364a12.119 12.119 0 015.168 5.168C50 9.16 50 12.61 50 19.511v10.978c0 6.901 0 10.352-1.364 12.979a12.12 12.12 0 01-5.168 5.168C40.84 50 37.39 50 30.489 50H19.511c-6.901 0-10.352 0-12.979-1.364a12.119 12.119 0 01-5.168-5.168C0 40.84 0 37.39 0 30.489V19.511z"
          fill="#C4C4C4"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M8.936 34.985c7.632 10.354 15.705 10.277 18.084 9.169l8.66-6.06-7.741-12.22a1929.904 1929.904 0 01-19.003 9.11z"
          fill="url(#paint0_linear_317_9721)"
        />
        <Path
          d="M19.728 36.49C9.093 24.994 9.451 15.948 10.852 13.01c0 0 .939-1.271 5.963-3.989s7.644 7.586 7.644 7.586l8.564 12.57c-.867.21-4.74 1.964-13.295 7.313z"
          fill="url(#paint1_linear_317_9721)"
        />
        <Path
          d="M29.366 13.03L16.97 19.636s8.29 9.052 10.244 15.876c1.954 6.823-.743 8.915-.743 8.915 4.517-1.467 14.311-4.184 12.689-14.272-1.623-10.088-6.354-13.979-9.795-17.127z"
          fill="url(#paint2_linear_317_9721)"
        />
        <Path
          d="M41.037 16.255l-11.945 6.863c-8.916-12.481-16.13-12.122-18.534-9.737.834-.984 4.426-4.023 11.495-7.292 7.07-3.269 15.602 5.415 18.984 10.166z"
          fill="url(#paint3_linear_317_9721)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_317_9721"
          x1={26.1467}
          y1={42.3534}
          x2={13.4217}
          y2={30.8679}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#05B4A4" />
          <Stop offset={1} stopColor="#4EFFEF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_317_9721"
          x1={10.1385}
          y1={8.56445}
          x2={37.5193}
          y2={31.0025}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.283302} stopColor="#2E294E" />
          <Stop offset={1} stopColor="#5D4DC7" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_317_9721"
          x1={16.9708}
          y1={13.0293}
          x2={39.4671}
          y2={34.5789}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#05B4A4" />
          <Stop offset={1} stopColor="#4EFFEF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_317_9721"
          x1={10.5575}
          y1={5.37109}
          x2={25.991}
          y2={31.878}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E294E" />
          <Stop offset={1} stopColor="#5D4DC7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
