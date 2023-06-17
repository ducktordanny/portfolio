import { useEffect } from 'react';
import gsap from 'gsap';

export const useScaleIn = (element: string, duration: number) => {
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

export const useScaleUp = (element: string, duration: number) => {
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

export const useSlideDown = (element: string, duration: number) => {
  useEffect(() => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        yPercent: -200,
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

export const useSlideUp = (element: string, duration: number) => {
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
