import { render } from '@testing-library/react';

import { getFormatedComponentArrayProp } from './formatters';

describe('Formatters util', () => {
  it('should check getFormatedComponentArrayProp', () => {
    const result = getFormatedComponentArrayProp(
      ['test', 'hello', 'world', 'what', 'is', 'up', '?'],
      2
    );
    const splitsByLines = result.split('\n');
    expect(splitsByLines.length).toEqual(4);
    expect(splitsByLines[0]).toEqual("'test', 'hello', ");
    expect(splitsByLines[1]).toEqual("    'world', 'what', ");
    expect(splitsByLines[2]).toEqual("    'is', 'up', ");
    expect(splitsByLines[3]).toEqual("    '?'");
  });
});
