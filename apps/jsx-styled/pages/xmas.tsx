import { NextPage } from 'next';

import { SelfClosingComponent } from 'jsx-styled/components/ui-code';

import NotFound from './404';

const XMas: NextPage = () => {
  return <NotFound />;
  return (
    <SelfClosingComponent
      name="Wish"
      props={[
        {
          name: 'to',
          value: 'you',
        },
        {
          name: 'what',
          value: 'Merry Christmas! 🎄',
        },
        {
          name: 'andLater',
          value: 'Happy New Year! 🎉',
        },
      ]}
    />
  );
};

export default XMas;
