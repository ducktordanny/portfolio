import { render } from '@testing-library/react';

import JsxStyledComponentsUiLayout from './jsx-styled-components-ui-layout';

describe('JsxStyledComponentsUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxStyledComponentsUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
