import { render } from '@testing-library/react';

import JsxStyledUtilsUtilAnimationHooks from './jsx-styled-utils-util-animation-hooks';

describe('JsxStyledUtilsUtilAnimationHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxStyledUtilsUtilAnimationHooks />);
    expect(baseElement).toBeTruthy();
  });
});
