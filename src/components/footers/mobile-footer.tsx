import { useAuth0 } from "@auth0/auth0-react"
import { Avatar } from "@chakra-ui/react"
import { Flex, GridItem, Box } from "@chakra-ui/layout"
import { Link } from "gatsby"
import React from "react"
import { Favorite, PetClinic, PetShop, Search, User } from "../../icons"

const Footer: React.FC = () => {
  const { isAuthenticated, user } = useAuth0()
  return (
    <GridItem
      as="footer"
      bg="brand.800"
      textColor="secondary.50"
      position="fixed"
      bottom="0"
      width="100vw"
    >
      <Flex p="4" justifyContent="space-between">
        <Box as={Link} to="/" w={8}>
          <PetClinic />
        </Box>
        <Box as={Link} to="/" w={8}>
          <PetShop />
        </Box>
        <Box as={Link} to="/" w={8} textColor="secondary.500">
          <Search />
        </Box>
        <Box as={Link} to="/" w={8}>
          <Favorite />
        </Box>

        <Box outline="none" border="none" w={8} h={8} as={Link} to="/cuenta">
          {isAuthenticated ? (
            <Avatar h="100%" w="100%" src={user.picture} />
          ) : (
            <User />
          )}
        </Box>
      </Flex>
    </GridItem>
  )
}

export default Footer
