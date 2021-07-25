import './../styles/globals.css'
import './../styles/calendar.scss'
import Head from 'next/head'
import LayoutWrapper from './../layouts/layout-wrapper';
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <title>FootBet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="//vk.com/js/api/openapi.js?152"></script>
      </Head>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>
  )
}
