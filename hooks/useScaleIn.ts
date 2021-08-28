import { useEffect } from 'react';
import gsap from 'gsap';

const useScaleIn = (element: string, duration: number) => {
	useEffect(() => {
		gsap.fromTo(
			element,
			{
				opacity: 0,
				scale: 0.5,
				xPercent: -200,
			},
			{
				opacity: 1,
				scale: 1,
				xPercent: 0,
				duration,
			}
		);
	});
};

export default useScaleIn;
