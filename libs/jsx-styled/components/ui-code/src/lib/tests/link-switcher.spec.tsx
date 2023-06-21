import { render } from '@testing-library/react';
import LinkSwitcher from '../link-switcher';

describe('LinkSwitcher component', () => {
  it('should render link switcher component', () => {
    const { baseElement } = render(
      <LinkSwitcher label="test" href="/something" navigation />
    );
    expect(baseElement).toBeTruthy();
  });
});
