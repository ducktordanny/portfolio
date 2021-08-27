import { NextPage } from 'next';
import Head from 'next/head';
import {
	LinkComponent,
	ParentComponent,
	SelfClosingComponent,
} from '../components/code';
import Layout from '../components/layout';

const Contacts: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Contacts</title>
			</Head>
			<ParentComponent name="DucktorDanny">
				<ParentComponent
					name="Navigation"
					props={[{ name: 'currentlyOn', value: 'Contacts' }]}
				>
					<LinkComponent name="Home" navigation href="/" />
					<LinkComponent name="Skills" navigation href="/skills" />
					<LinkComponent
						name="Projects"
						navigation
						href="/projects"
					/>
				</ParentComponent>
				<SelfClosingComponent
					name="Contacts"
					props={[
						{ name: 'instagram', value: 'ducktor.danny' },
						{ name: 'twitter', value: 'ducktor_D' },
						{ name: 'email', value: 'ducktordanny@gmail.com' },
					]}
				/>
				<LinkComponent
					name="SendAnEmail"
					navigation={false}
					href="mailto:ducktordanny@gmail.com"
				/>
			</ParentComponent>
		</Layout>
	);
};

export default Contacts;
