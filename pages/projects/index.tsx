import { NextPage } from 'next';
import Head from 'next/head';
import { LinkComponent, ParentComponent } from '../../components/code';
import Layout from '../../components/layout';

const Contacts: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Projects</title>
			</Head>
			<ParentComponent name="DucktorDanny">
				<ParentComponent
					name="Navigation"
					props={[{ name: 'currentlyOn', value: 'Projects' }]}
				>
					<LinkComponent name="Home" navigation href="/" />
					<LinkComponent name="Skills" navigation href="/skills" />
					<LinkComponent
						name="Contacts"
						navigation
						href="/contacts"
					/>
				</ParentComponent>
				<ParentComponent name="ProjectsContainer">
					<ParentComponent
						name="FeaturedProject"
						props={[
							{ name: 'name', value: 'FamsList' },
							{
								name: 'description',
								value: 'Share a shopping list with your family or friends.',
							},
							{ name: 'type', value: 'Mobile App' },
						]}
					>
						<LinkComponent
							name="Github"
							navigation={false}
							href="https://github.com/ducktordanny/family-shopping-list"
						/>
					</ParentComponent>
					<label htmlFor="separating">{`  {/* -------------------- */}`}</label>
					<ParentComponent
						name="Project"
						props={[
							{ name: 'name', value: 'Hungary Covid' },
							{
								name: 'description',
								value: 'Covid site with more data from Hungary.',
							},
							{ name: 'type', value: 'MERN Stack' },
						]}
					>
						<LinkComponent
							name="CheckOut"
							navigation={false}
							href="https://hungarycovid.vercel.app"
						/>
						<LinkComponent
							name="Github"
							navigation={false}
							href="https://github.com/ducktordanny/hungarycovid"
						/>
					</ParentComponent>
					<label htmlFor="separating">{`  {/* -------------------- */}`}</label>
					<ParentComponent
						name="Project"
						props={[
							{ name: 'name', value: 'JSX Portfolio' },
							{
								name: 'description',
								value: 'A simple, but unique JSX style portfolio.',
							},
							{ name: 'type', value: 'Next.js App' },
						]}
					>
						<LinkComponent
							name="Github"
							navigation={false}
							href="https://github.com/ducktordanny/jsx-portfolio"
						/>
					</ParentComponent>
				</ParentComponent>
			</ParentComponent>
		</Layout>
	);
};

export default Contacts;
