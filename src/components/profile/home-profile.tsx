import React from "react"
import { Flex, Box, Button } from "@chakra-ui/react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"

export const HomeProfile = ({ path }) => {
  const { user, logout } = useAuth0()
  return (
    <Box p="4">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button as={Link} to="/cuenta/crear-veterinaria" colorScheme="brand">
        Crea tu Veterinaria
      </Button>
      <br />
      <Button onClick={() => logout()} colorScheme="secondary">
        Logout
      </Button>
    </Box>
  )
}
