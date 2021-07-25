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
      </Head>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>
  )
}
