import { NextPage } from 'next';
import Head from 'next/head';
import {
	LinkComponent,
	ParentComponent,
	SelfClosingComponent,
} from '../components/code';
import Layout from '../components/layout';

// TODO: in layout.tsx we should use next/router to detect which page we are on...
// TODO: maybe we should make a navigation component and after that just use it with an array of pages
// TODO: should redirect from home to / or inversely

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
