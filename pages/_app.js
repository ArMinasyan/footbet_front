import './../styles/globals.css'
import Head from 'next/head'
import LayoutWrapper from './../layouts/layout-wrapper';
import { Provider } from 'react-redux'
import withRedux, { createWrapper } from 'next-redux-wrapper'
import  store from '../redux/store'

function MyApp({ Component, pageProps }) {
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

const makeStore = () => store
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
