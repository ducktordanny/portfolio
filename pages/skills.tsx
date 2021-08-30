import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';

const Skills: NextPage = () => {
	return (
		<Layout>
			<SelfClosingComponent
				name="Skills"
				props={[
					{
						name: 'code',
						value: [
							'HTML',
							'CSS',
							'JavaScript',
							'TypeScript',
							'NodeJS',
							'Express',
							'MongoDB',
							'SQL',
							'React',
							'React Native',
							'tailwindcss',
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
