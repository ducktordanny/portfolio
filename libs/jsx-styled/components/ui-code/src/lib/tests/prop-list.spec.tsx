import { render } from '@testing-library/react';

import { PropList } from '../prop-list';

describe('PropList component', () => {
  it('should render', () => {
    const { baseElement } = render(<PropList array={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
