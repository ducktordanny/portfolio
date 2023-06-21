import { render } from '@testing-library/react';
import * as NextRouter from 'next/router';

import { Layout } from '../layout';

describe('Layout component', () => {
  it('should render', () => {
    jest
      .spyOn(NextRouter, 'useRouter')
      .mockReturnValue({ pathname: '' } as any);
    const { baseElement } = render(<Layout>test</Layout>);
    expect(baseElement).toBeTruthy();
  });
});
