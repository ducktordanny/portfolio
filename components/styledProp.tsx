import { handleArrayDisplaying } from '../helper/utils';
import { Component, Nmbr, Str } from './colored';

export const NumberProp = ({ value }: { value: number }) => (
  <>
    <Component>{'{'}</Component>
    <Nmbr>{value}</Nmbr>
    <Component>{'}'}</Component>
  </>
);

export const StringProp = ({ value }: { value: string }) => (
  <>
    <Str>{'"'}</Str>
    <Str>{value}</Str>
    <Str>{'"'}</Str>
  </>
);

export const StringArrayProp = ({ values }: { values: string[] }) => (
  <>
    <Component>{'{['}</Component>
    <Str>{`'${handleArrayDisplaying(values, 4)}'`}</Str>
    <Component>{']}'}</Component>
  </>
);

const StyledProp = ({ value }: { value: string | number | string[] }) => {
  switch (`${typeof value}`) {
    case 'number':
      return <NumberProp value={+value} />;
    case 'string':
      return <StringProp value={value + ''} />;
    case 'object':
      return <StringArrayProp values={value instanceof Array ? value : []} />;
    default:
      return <></>;
  }
};

export default StyledProp;
