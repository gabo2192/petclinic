import React from "react"
import { Router } from "@reach/router"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { PageProps } from "gatsby"

import { HomeLayout } from "../components/layouts/home-layout"
import { HomeProfile } from "../components/profile/home-profile"
import { PetClinicForm } from "../components/forms/form-components/pet-clinic"
import { Loading } from "../components/ui/loading"

const ProfilePage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <Router basepath="/cuenta">
        <PetClinicForm path="/crear-veterinaria" />
        <HomeProfile path="/" />
      </Router>
    </HomeLayout>
  )
}

export default withAuthenticationRequired(ProfilePage, {
  onRedirecting: () => (
    <HomeLayout>
      <Loading fullpage />
    </HomeLayout>
  ),
})
