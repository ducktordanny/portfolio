import { NextPage } from 'next';
import { SelfClosingComponent } from '../components/code';
import Layout from '../components/layout';

const NotFound: NextPage = () => (
	<Layout>
		<SelfClosingComponent
			name="Error"
			props={[
				{ name: 'status', value: '404' },
				{ name: 'message', value: 'This page could not be found.' },
			]}
		/>
	</Layout>
);

export default NotFound;
