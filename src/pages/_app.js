import Head from 'next/head';
import '../styles/styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Mayoral ® España | Moda Online para Bebés, Niñas y Niños </title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
