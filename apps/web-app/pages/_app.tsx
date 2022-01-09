import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from '@football-app/app/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to football-api web-app!</title>
      </Head>
      <Header />
      <main className="app h-full flex flex-col">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
