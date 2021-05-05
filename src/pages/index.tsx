import { PageProps } from "gatsby"
import React from "react"

import { HomeLayout } from "../components/layouts/home-layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <SEO title="Home" />
      INICIO PET DIRECTORIO
    </HomeLayout>
  )
}

export default IndexPage
