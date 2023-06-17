import { NextPage } from 'next';

import { SelfClosingComponent } from 'jsx-styled/components/ui-code';

const NoGift: NextPage = () => {
  return (
    <SelfClosingComponent
      name="Info"
      props={[{ name: 'message', value: 'Out of gifts, sorry! :(' }]}
    />
  );
};

export default NoGift;
