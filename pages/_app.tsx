import { ReactElement, ReactNode } from 'react'
import type { NextPage, } from 'next';
import type { AppProps} from 'next/app'

import ThemeProvider from 'theme'
import GloalStyles from 'theme/GlobalStyles';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <ThemeProvider>
      <GloalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default App
