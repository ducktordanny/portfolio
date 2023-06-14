import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';
import NotFound from './404';

const XMas: NextPage = () => {
  return <NotFound />;
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
