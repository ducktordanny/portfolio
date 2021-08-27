import Logo from './logo';
import Tip from './tip';

interface LayoutProps {
	children: React.ReactNode;
}

// TODO: Fix horizontal overlfow.
export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col items-center justify-between min-h-screen p-8">
			<Logo className="mx-auto" />
			{/* <Tip label="The bold underlined texts can be clicked." /> */}
			<main className="max-w-full bg-code rounded-2xl mt-8 px-6">
				<div className="overflow-x-auto py-6">{children}</div>
			</main>
			<footer className="pt-8 text-gray-800">
				Copyright © 2021 Daniel Lazar.
			</footer>
		</div>
	);
}
