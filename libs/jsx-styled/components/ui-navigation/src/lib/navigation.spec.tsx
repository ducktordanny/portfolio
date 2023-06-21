import { render } from '@testing-library/react';
import * as NextRouter from 'next/router';

import { Navigation } from './navigation';

describe('Navigation component', () => {
  it('should render', () => {
    jest
      .spyOn(NextRouter, 'useRouter')
      .mockReturnValue({ pathname: '' } as any);
    const { baseElement } = render(
      <Navigation paths={['test', 'hello', 'world']} />
    );
    expect(baseElement).toBeTruthy();
  });
});
