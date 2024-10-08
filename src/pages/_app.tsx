import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

// Fonte-Family
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
