import { render } from '@testing-library/react';

import JsxStyledComponentsUiNavigation from './jsx-styled-components-ui-navigation';

describe('JsxStyledComponentsUiNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxStyledComponentsUiNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
