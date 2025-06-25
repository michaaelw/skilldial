import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

interface GoogleIconProps {
  color?: string;
  size?: number;
}

export function GoogleIcon({ color, size = 16 }: GoogleIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_368_6510)">
        <Path
          d="M15.844 8.184c0-.544-.044-1.09-.138-1.625H8.16v3.08h4.321a3.703 3.703 0 01-1.599 2.431v2h2.578c1.514-1.394 2.384-3.452 2.384-5.886z"
          fill="#4285F4"
        />
        <Path
          d="M8.16 16c2.158 0 3.977-.708 5.303-1.931l-2.578-1.999c-.717.488-1.643.764-2.722.764-2.087 0-3.857-1.408-4.492-3.3h-2.66v2.06A8.001 8.001 0 008.16 16z"
          fill="#34A853"
        />
        <Path
          d="M3.669 9.534a4.792 4.792 0 010-3.063V4.41H1.01a8.007 8.007 0 000 7.183l2.658-2.06z"
          fill="#FBBC04"
        />
        <Path
          d="M8.16 3.166a4.347 4.347 0 013.069 1.2l2.284-2.284A7.689 7.689 0 008.16 0 7.998 7.998 0 001.011 4.41l2.657 2.06C4.3 4.575 6.073 3.167 8.16 3.167z"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_368_6510">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
