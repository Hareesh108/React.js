import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App(props: AppProps) {
  console.log(props);
  
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="This is the meta data" />
        <meta name="keywords" content="Harry Developer" />
        <meta name="author" content="Hareesh Bhittam" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
