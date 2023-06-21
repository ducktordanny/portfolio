import { render } from '@testing-library/react';
import Logo from '../logo';

describe('Logo component', () => {
  it('should render', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });
});
