import { render } from '@testing-library/react';

import JsxStyledUtilsUtilFormatters from './jsx-styled-utils-util-formatters';

describe('JsxStyledUtilsUtilFormatters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxStyledUtilsUtilFormatters />);
    expect(baseElement).toBeTruthy();
  });
});
