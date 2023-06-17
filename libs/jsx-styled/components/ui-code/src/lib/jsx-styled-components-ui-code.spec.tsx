import { render } from '@testing-library/react';

import JsxStyledComponentsUiCode from './jsx-styled-components-ui-code';

describe('JsxStyledComponentsUiCode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxStyledComponentsUiCode />);
    expect(baseElement).toBeTruthy();
  });
});
