import gsap from "gsap";
import {useEffect} from "react";

const useScrollAnimation = (element: string, duration: number) => {
  const triggerIn = gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.75,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
    }
  );

  const triggerOut = triggerIn.reverse();

  useEffect(() => {
    triggerIn.play();
    return () => {
      triggerOut.play();
    }
  }, []);

  return [triggerIn, triggerOut] as const;
};

export default useScrollAnimation;
