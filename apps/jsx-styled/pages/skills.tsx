import { NextPage } from 'next';

import { SelfClosingComponent } from 'jsx-styled/components/ui-code';

const Skills: NextPage = () => {
  return (
    <SelfClosingComponent
      name="Skills"
      props={[
        {
          name: 'code',
          value: [
            'Angular',
            'Nx',
            'TypeScript',
            'NodeJS',
            'd3.js',
            'billboard',
            'echarts',
            'cypress',
            'etc.',
          ],
        },
        {
          name: 'other',
          value: [
            'Unix',
            'Jira',
            'ADO',
            'GitHub',
            'Confluence',
            'Figma',
            'Git',
          ],
        },
        {
          name: 'language',
          value: ['English (B2)'],
        },
      ]}
    />
  );
};

export default Skills;
