import { NextPage } from 'next';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const Test: NextPage = () => (
	<Layout>
		<Navigation paths={['test', 'home', 'skills']} />
	</Layout>
);

export default Test;
