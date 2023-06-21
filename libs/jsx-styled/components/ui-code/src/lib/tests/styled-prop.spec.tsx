import { render } from '@testing-library/react';

import StyledProp, {
  NumberProp,
  StringArrayProp,
  StringProp,
} from '../styled-prop';

describe('styled prop components', () => {
  it('should render NumberProp component', () => {
    const { baseElement } = render(<NumberProp value={1} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render StringProp component', () => {
    const { baseElement } = render(<StringProp value="test" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render StringArrayProp component', () => {
    const { baseElement } = render(<StringArrayProp values={[]} />);
    expect(baseElement).toBeTruthy();
  });

  describe('StyledProp component', () => {
    it('should render with number value', () => {
      const { baseElement } = render(<StyledProp value={1} />);
      expect(baseElement).toBeTruthy();
    });

    it('should render with string value', () => {
      const { baseElement } = render(<StyledProp value="test" />);
      expect(baseElement).toBeTruthy();
    });

    it('should render with array of strings value', () => {
      const { baseElement } = render(
        <StyledProp value={['test', 'hello world']} />
      );
      expect(baseElement).toBeTruthy();
    });
  });
});
