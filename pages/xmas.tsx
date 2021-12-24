import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';

const XMas: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default XMas;
