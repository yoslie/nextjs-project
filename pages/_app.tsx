import '../styles/globals.css'
import type { AppProps } from 'next/app'

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
