import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Button, Tooltip } from '@mui/material';
import { startCase } from 'lodash';

import { ParentComponent } from 'jsx-styled/components/ui-code';
import { Navigation } from 'jsx-styled/components/ui-navigation';
import {
  useScaleUp,
  useSlideDown,
} from 'jsx-styled/utils/util-animation-hooks';

import Logo from './logo';
import Tip from './tip';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [title, setTitle] = useState<string>('DucktorDanny');
  useSlideDown('#gift-button', 1);
  useScaleUp('main', 1);

  useEffect(() => {
    setTitle(startCase(router.pathname.replace('/', '')));
  }, [router]);

  const redirectToCollectGift = async () => {
    window.location.href = 'api/gift';
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-full flex flex-col items-center justify-between min-h-screen px-2 py-6 text-xs sm:p-8 sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <Tooltip title="Collect your special gift!">
          <Button
            id="gift-button"
            className="gift-button"
            color="warning"
            variant="contained"
            onClick={redirectToCollectGift}
          >
            <CardGiftcardIcon />
          </Button>
        </Tooltip>
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
    </>
  );
}
