import reactGA from "react-ga4";

import { memo, ReactNode, useEffect } from "react"

interface ReactGAProps {
  children: ReactNode
}
function BaseReactGA ({ children }: ReactGAProps) {

  useEffect(() => {
    reactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string);
  }, [])
  

  return (
    <>
      {children}
    </>
  )
}

export const ReactGA = memo(BaseReactGA)
