import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useSlideUp = (element: string, duration: number) => {
	useEffect(() => {
		gsap.fromTo(
			element,
			{
				opacity: 0,
				yPercent: 200,
			},
			{
				opacity: 1,
				yPercent: 0,
				ease: 'back.out(1)',
				duration,
			}
		);
	}, [element, duration]);
};

export default useSlideUp;
