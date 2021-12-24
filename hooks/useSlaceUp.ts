import { useEffect } from 'react';
import gsap from 'gsap';

const useScaleUp = (element: string, duration: number) => {
  useEffect(() => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
      }
    );
  });
};

export default useScaleUp;
