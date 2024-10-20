import { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Create Next App</title>
      </Head>

      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
