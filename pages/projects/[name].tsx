import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

interface ProjectProps {
	projectData: {
		name: string;
	};
}

const Project: NextPage<ProjectProps> = ({ projectData }: ProjectProps) => {
	useEffect(() => {
		console.log(projectData.name);
	}, [projectData]);

	return (
		<div>
			<h1>{projectData.name}</h1>
		</div>
	);
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					name: 'test',
				},
			},
		],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	console.log(params);
	const projectData = params;
	return {
		props: {
			projectData,
		},
	};
};
