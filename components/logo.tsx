import Image from 'next/image';
import LogoSvg from '../public/logo.svg';

interface LogoProps {
	className?: string | undefined;
	width?: string | number | undefined;
	height?: string | number | undefined;
}

export default function Logo({ className, width, height }: LogoProps) {
	return (
		<Image
			src={LogoSvg}
			alt="DucktorDanny logo"
			className={className || ''}
			width={width || 100}
			height={height || 100}
		/>
	);
}
