import { NextPage } from 'next';
import Head from 'next/head';
import { LinkComponent, ParentComponent } from '../../components/code';
import Layout from '../../components/layout';

const Contacts: NextPage = () => {
	return (
		<Layout>
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
						href="https://hungarycovid.vercel.app"
					/>
					<LinkComponent
						name="Github"
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
						href="https://github.com/ducktordanny/jsx-portfolio"
					/>
				</ParentComponent>
			</ParentComponent>
		</Layout>
	);
};

export default Contacts;
