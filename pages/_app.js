import '@/styles/globals.css'
import Appbar from '@/components/Appbar'
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Template App</title>
    </Head>

    {/* <ContextProvider> */}
      <div className="flex flex-col h-screen">
        {/* <Notifications /> */}
        <Appbar/>

          <Component {...pageProps} />
          
      </div>
    {/* </ContextProvider> */}
  </>
  )
  
}
