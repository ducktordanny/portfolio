import { render } from '@testing-library/react';

import Footer from '../footer';

describe('Footer component', () => {
  it('should render', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
