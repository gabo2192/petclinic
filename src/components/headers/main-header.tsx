import { Box, Flex, GridItem } from "@chakra-ui/layout"
import { Link } from "gatsby"
import React from "react"
import { Logo, Menu } from "../../icons"

export const Header: React.FC = () => (
  <GridItem as="header">
    <Flex p="4">
      <Link to="/">
        <Logo />
      </Link>
      <Box height="9" width="9" ml="auto" textColor="brand.800">
        <Menu />
      </Box>
    </Flex>
  </GridItem>
)
