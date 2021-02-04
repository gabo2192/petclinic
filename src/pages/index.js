import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    loginWithRedirect,
    getAccessTokenSilently,
    isAuthenticated,
  } = useAuth0()

  const handleClick = async () => {
    const token = await getAccessTokenSilently()
    const response = await fetch(
      "http://jemmyperez.pythonanywhere.com/api/private",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(r => r.json())
    console.log({ response })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>LOGIN</button>
      )}
      <button onClick={handleClick}>Traer INFO DE API</button>
    </Layout>
  )
}

export default IndexPage
