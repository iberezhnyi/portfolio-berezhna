import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
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
