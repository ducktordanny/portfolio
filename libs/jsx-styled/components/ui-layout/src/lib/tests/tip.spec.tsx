import { render } from '@testing-library/react';
import Tip from '../tip';

describe('Tip component', () => {
  it('should render', () => {
    const { baseElement } = render(
      <Tip label="This is just a test... Hello!!! :)" />
    );
    expect(baseElement).toBeTruthy();
  });
});
