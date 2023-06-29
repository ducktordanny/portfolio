import Image from 'next/image';
import Link from 'next/link';

import { useSlideDown } from 'jsx-styled/utils/util-animation-hooks';

interface LogoProps {
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export default function Logo({ className, width, height }: LogoProps) {
  useSlideDown('.logo', 0.7);
  return (
    <Link href="/home" className="logo">
      <Image
        priority={true}
        src="/jsx/shared/logo.svg"
        alt="DucktorDanny logo"
        className={className || ''}
        width={width || 100}
        height={height || 100}
      />
    </Link>
  );
}
