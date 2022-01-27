import { ReactElement, ReactNode } from 'react'
import type { NextPage, } from 'next';
import type { AppProps} from 'next/app'

import ThemeProvider from 'theme'

import { storeWrapper } from 'store'

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
  const withLayout = getLayout(<Component {...pageProps} />)

  return (
    <ThemeProvider>
      {withLayout}
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(App);
