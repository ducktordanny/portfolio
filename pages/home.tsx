import type { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const getAge = (birthdayString: string): number => {
    const ageInMilliseconds = Date.now() - new Date(birthdayString).getTime();
    const ageDate = new Date(ageInMilliseconds);
    return Math.abs(ageDate.getFullYear() - 1970);
  };

  return (
    <Layout>
      <SelfClosingComponent
        name="PersonalInfo"
        props={[
          { name: 'fullName', value: 'Daniel Lazar' },
          { name: 'age', value: getAge('2001-01-12') },
          { name: 'country', value: 'Hungary' },
          { name: 'school', value: 'University of Pannonia' },
          {
            name: 'majorIn',
            value: 'Computer Science Engineering Bsc',
          },
          { name: 'status', value: 'Software Engineer at One Identity' },
          { name: 'speaks', value: ['Hungarian', 'English'] },
        ]}
      />
    </Layout>
  );
};

export default Home;
