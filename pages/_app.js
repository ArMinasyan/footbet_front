import './../styles/globals.css'
import Head from 'next/head'
import LayoutWrapper from './../layouts/layout-wrapper';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FootBet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}

export default MyApp
