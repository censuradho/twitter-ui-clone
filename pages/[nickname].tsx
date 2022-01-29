import { useRouter } from "next/router"
import { NextLayoutComponentType } from "next"
import { ReactElement } from "react"

import { MainLayout } from "Layout"

const Perfil: NextLayoutComponentType = () => {
  const router = useRouter()

  const { nickname } = router.query
  return (
    <h1>{nickname}</h1>
  )
}

Perfil.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Perfil