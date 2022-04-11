import useScaleUp from '../hooks/useSlaceUp';
import useSlideUp from '../hooks/useSlideUp';
import { ParentComponent } from './code';
import Logo from './logo';
import Navigation from './navigation';
import Tip from './tip';
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScaleUp('main', 1);

  return (
    <div className="h-full flex flex-col items-center justify-between min-h-screen px-2 py-6 text-xs sm:p-8 sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <Logo className="mx-auto" />
      <main className="overflow-x-auto max-w-full bg-code rounded-md md:rounded-2xl opacity-0 mt-6 sm:mt-8">
        <pre id="main-info" className="inline-block p-3 sm:p-6 lg:p-8">
          <Tip label="The bold underlined texts can be clicked." />
          <ParentComponent name="DucktorDanny">
            <Navigation paths={['home', 'skills', 'projects', 'contacts']} />
            {children}
          </ParentComponent>
        </pre>
      </main>
      <Footer />
    </div>
  );
}
