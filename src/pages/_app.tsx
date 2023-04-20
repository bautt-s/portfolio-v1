import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter } from 'next/font/google';

const plex = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-plex' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>
      {`
          :root {
            --font-rubik: ${inter.style.fontFamily};
            --font-plex: ${plex.style.fontFamily};
          }
        `}
    </style>
    <Component {...pageProps} />
  </>
}
