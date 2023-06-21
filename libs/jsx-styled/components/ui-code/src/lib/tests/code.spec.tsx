import { render } from '@testing-library/react';

import {
  SelfClosingComponent,
  ParentComponent,
  LinkComponent,
  ButtonComponent,
} from '../code';

describe('Code componetns', () => {
  it('should render self closing component', () => {
    const { baseElement } = render(<SelfClosingComponent name="data" />);
    expect(baseElement).toBeTruthy();
  });

  it('shoulg render parent component', () => {
    const { baseElement } = render(
      <ParentComponent name="data">doggo</ParentComponent>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render link component', () => {
    const { baseElement } = render(<LinkComponent name="data" href="meow" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render button component', () => {
    const { baseElement } = render(
      <ButtonComponent name="data" onClick={console.log} />
    );
    expect(baseElement).toBeTruthy();
  });
});
