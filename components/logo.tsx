import Image from 'next/image';
import Link from 'next/link';
import useSlideDown from '../hooks/useSlideDown';
import LogoSvg from '../public/logo.svg';

interface LogoProps {
	className?: string | undefined;
	width?: string | number | undefined;
	height?: string | number | undefined;
}

export default function Logo({ className, width, height }: LogoProps) {
	useSlideDown('.logo', 0.7);
	return (
		<Link href="/home">
			<a className="logo">
				<Image
					src={LogoSvg}
					alt="DucktorDanny logo"
					className={className || ''}
					width={width || 100}
					height={height || 100}
				/>
			</a>
		</Link>
	);
}
