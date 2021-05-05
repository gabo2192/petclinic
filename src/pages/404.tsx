import { PageProps } from "gatsby"
import React from "react"

import { HomeLayout } from "../components/layouts/home-layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <HomeLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HomeLayout>
)

export default NotFoundPage
