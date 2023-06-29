import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from 'jsx-styled/components/ui-layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DucktorDanny</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/public/shared/favicon.ico"
        />
        <meta name="theme-color" content="4b839e" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
