import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';

const NoGift: NextPage = () => {
  return (
    <Layout>
      <SelfClosingComponent
        name="Info"
        props={[{ name: 'message', value: 'Out of gifts, sorry! :(' }]}
      />
    </Layout>
  );
};

export default NoGift;
