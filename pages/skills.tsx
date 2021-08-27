import { NextPage } from 'next';
import Head from 'next/head';
import {
	LinkComponent,
	ParentComponent,
	SelfClosingComponent,
} from '../components/code';
import Layout from '../components/layout';

const Skills: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Skills</title>
			</Head>
			<ParentComponent name="DucktorDanny">
				<ParentComponent
					name="Navigation"
					props={[{ name: 'currentlyOn', value: 'Skills' }]}
				>
					<LinkComponent name="Home" navigation href="/" />
					<LinkComponent
						name="Projects"
						navigation
						href="/projects"
					/>
					<LinkComponent
						name="Contacts"
						navigation
						href="/contacts"
					/>
				</ParentComponent>
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
							value: ['Trello', 'Figma', 'Git', 'Vercel'],
						},
						{
							name: 'language',
							value: ['English (B2)'],
						},
					]}
				/>
			</ParentComponent>
		</Layout>
	);
};

export default Skills;
