import { renderHook } from '@testing-library/react';
import gsap from 'gsap';

import {
  useScaleIn,
  useScaleUp,
  useSlideDown,
  useSlideUp,
} from './animation-hooks';

const testElementSelector = '.test-class';
const testDuration = 1;

describe('Animation hooks', () => {
  it('should check scale in hook animation config', () => {
    const fromToSpy = jest.spyOn(gsap, 'fromTo');
    renderHook(() => useScaleIn(testElementSelector, testDuration));

    expect(fromToSpy).toHaveBeenCalledWith(
      testElementSelector,
      expect.objectContaining({
        opacity: 0,
        scale: 0.5,
        xPercent: -200,
      }),
      expect.objectContaining({
        opacity: 1,
        scale: 1,
        xPercent: 0,
        duration: testDuration,
      })
    );
  });

  it('should check scale up hook animation config', () => {
    const fromToSpy = jest.spyOn(gsap, 'fromTo');
    renderHook(() => useScaleUp(testElementSelector, testDuration));

    expect(fromToSpy).toHaveBeenCalledWith(
      testElementSelector,
      expect.objectContaining({
        opacity: 0,
        scale: 0.5,
      }),
      expect.objectContaining({
        opacity: 1,
        scale: 1,
        duration: testDuration,
      })
    );
  });

  it('should check slide down hook animation config', () => {
    const fromToSpy = jest.spyOn(gsap, 'fromTo');
    renderHook(() => useSlideDown(testElementSelector, testDuration));

    expect(fromToSpy).toHaveBeenCalledWith(
      testElementSelector,
      expect.objectContaining({
        opacity: 0,
        yPercent: -200,
      }),
      expect.objectContaining({
        opacity: 1,
        yPercent: 0,
        ease: 'back.out(1)',
        duration: testDuration,
      })
    );
  });

  it('should check slide up hook animation config', () => {
    const fromToSpy = jest.spyOn(gsap, 'fromTo');
    renderHook(() => useSlideUp(testElementSelector, testDuration));

    expect(fromToSpy).toHaveBeenCalledWith(
      testElementSelector,
      expect.objectContaining({
        opacity: 0,
        yPercent: 200,
      }),
      expect.objectContaining({
        opacity: 1,
        yPercent: 0,
        ease: 'back.out(1)',
        duration: testDuration,
      })
    );
  });
});
