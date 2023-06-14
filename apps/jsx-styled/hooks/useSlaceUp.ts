import { useEffect } from 'react';
import gsap from 'gsap';

const useScaleUp = (element: string, duration: number) => {
  const trigger = () => {
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
  };

  useEffect(() => {
    trigger();
  }, []);

  return trigger;
};

export default useScaleUp;
