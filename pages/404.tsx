import { NextPage } from 'next';
import Layout from '../components/layout';

const NotFound = () => (
	<Layout>
		<pre>
			<span style={{ color: '#FFD665' }}>{'<Error'}</span>
			<br />
			<span style={{ color: '#7AACFF' }}>{'  status='}</span>
			<span style={{ color: '#FFD665' }}>{'{'}</span>
			<span style={{ color: '#FF7646' }}>404</span>
			<span style={{ color: '#FFD665' }}>{'}'}</span>
			<br />
			<span style={{ color: '#7AACFF' }}>{'  message='}</span>
			<span style={{ color: '#A7E783' }}>
				{'"This page could not be found."'}
			</span>
			<br />
			<span style={{ color: '#FFD665' }}>{'/>'}</span>
			{/* {`<Error\n  status={404}\n  message="This page could not be found."\n/>`} */}
		</pre>
	</Layout>
);

export default NotFound;
