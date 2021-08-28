import useScaleIn from '../hooks/useScaleIn';
import useSlideUp from '../hooks/useSlideUp';
import { ParentComponent } from './code';
import Logo from './logo';
import Navigation from './navigation';
import Tip from './tip';

interface LayoutProps {
	children: React.ReactNode;
}

// TODO: Fix horizontal overlfow.
export default function Layout({ children }: LayoutProps) {
	useScaleIn('main', 1);
	useSlideUp('footer', 0.7);

	return (
		<div className="h-full flex flex-col items-center justify-between min-h-screen px-2 py-6 text-sm sm:p-8 sm:text-base lg:text-lg xl:text-xl">
			<Logo className="mx-auto" />
			<main className="max-w-full bg-code rounded-2xl opacity-0 px-3 mt-6 sm:px-6 sm:mt-8">
				<Tip
					className="mt-3 sm:mt-6"
					label="The bold underlined texts can be clicked."
				/>
				<div className="overflow-x-auto py-3 sm:py-6 lg:py-8">
					<ParentComponent name="DucktorDanny">
						<Navigation
							paths={['home', 'skills', 'projects', 'contacts']}
						/>
						{children}
					</ParentComponent>
				</div>
			</main>
			<footer className="mt-6 text-center  text-white opacity-0 sm:pt-8">
				Copyright © 2021 Daniel Lazar.
			</footer>
		</div>
	);
}
