import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DucktorDanny</title>
        <meta name="theme-color" content="4b839e" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
