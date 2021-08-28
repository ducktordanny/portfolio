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
		</Layout>
	);
};

export default Contacts;
