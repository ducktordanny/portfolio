import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';
import useRecordAnalytic from '../hooks/useRecordAnalytic';
import { LinearProgress } from '@mui/material';

const Skills: NextPage = () => {
  const loading = useRecordAnalytic();

  if (loading) return <LinearProgress />;

  return (
    <Layout>
      <SelfClosingComponent
        name="Skills"
        props={[
          {
            name: 'code',
            value: [
              'TypeScript',
              'NodeJS',
              'Express',
              'MongoDB',
              'SQL',
              'Angular',
              'React',
              'React Native',
              'tailwindcss',
              'cypress',
              'etc.',
            ],
          },
          {
            name: 'other',
            value: ['Unix', 'Trello', 'Figma', 'Git'],
          },
          {
            name: 'language',
            value: ['English (B2)'],
          },
        ]}
      />
    </Layout>
  );
};

export default Skills;
