import './../styles/globals.css'
import './../styles/calendar.scss'
import Head from 'next/head'
import LayoutWrapper from './../layouts/layout-wrapper';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { resetServerContext } from 'react-beautiful-dnd';
export default function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <title>FootBet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="//vk.com/js/api/openapi.js?152"></script>
        <link rel="stylesheet" href="../static-empty.css" />
      </Head>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>
  )
}

export async function getServerSideProps(context) {

  resetServerContext()

  return {
    props: {}, // will be passed to the page component as props
  }
}