import type { NextPage } from 'next';
import Head from 'next/head';
import {
	LinkComponent,
	ParentComponent,
	SelfClosingComponent,
} from '../components/code';
import Layout from '../components/layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<SelfClosingComponent
				name="PersonalInfo"
				props={[
					{ name: 'fullName', value: 'Daniel Lazar' },
					{ name: 'age', value: 20 },
					{ name: 'country', value: 'Hungary' },
					{ name: 'school', value: 'University of Pannonia' },
					{
						name: 'majorIn',
						value: 'Computer Science Engineering Bsc',
					},
					{ name: 'status', value: 'Looking for internship.' },
					{ name: 'speaks', value: ['Hungarian', 'English'] },
				]}
			/>
		</Layout>
	);
};

export default Home;
