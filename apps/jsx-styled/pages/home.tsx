import type { NextPage } from 'next';

import { SelfClosingComponent } from 'jsx-styled/components/ui-code';

const Home: NextPage = () => {
  const getAge = (birthdayString: string): number => {
    const ageInMilliseconds = Date.now() - new Date(birthdayString).getTime();
    const ageDate = new Date(ageInMilliseconds);
    return Math.abs(ageDate.getFullYear() - 1970);
  };

  return (
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
        { name: 'status', value: 'Frontend Engineer at Axoflow' },
        { name: 'speaks', value: ['Hungarian', 'English'] },
      ]}
    />
  );
};

export default Home;
