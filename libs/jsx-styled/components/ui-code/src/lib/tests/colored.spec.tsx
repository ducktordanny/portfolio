import { render } from '@testing-library/react';

import { Component, Nmbr, Prop, Str } from '../colored';

describe('colored components', () => {
  it('should render colored component', () => {
    const { baseElement } = render(<Component>Test</Component>);
    expect(baseElement).toBeTruthy();
  });

  it('should render colored prop', () => {
    const { baseElement } = render(<Prop>Test</Prop>);
    expect(baseElement).toBeTruthy();
  });

  it('should render colored number', () => {
    const { baseElement } = render(<Nmbr>Test</Nmbr>);
    expect(baseElement).toBeTruthy();
  });

  it('should render colored string', () => {
    const { baseElement } = render(<Str>Test</Str>);
    expect(baseElement).toBeTruthy();
  });
});
