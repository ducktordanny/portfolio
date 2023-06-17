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
  );
};

export default Skills;
