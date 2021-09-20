import './../styles/globals.css'
import './../styles/calendar.scss'
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head'
import LayoutWrapper from './../layouts/layout-wrapper';
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { resetServerContext } from 'react-beautiful-dnd';
import { getSession, SessionProvider } from "next-auth/client"
import"./../styles/static-empty.css";


export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } 
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>FootBet</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script type="text/javascript" src="//vk.com/js/api/openapi.js?152"></script>
          </Head>
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}

export async function getServerSideProps(ctx) {

  resetServerContext()

  return {
    props: {
      session: await getSession(ctx)
    }
  }
}