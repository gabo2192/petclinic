import React from "react"
import { Box, Grid, GridItem } from "@chakra-ui/react"

import { Header } from "../headers/main-header"
import Footer from "../footers/mobile-footer"
import { Helmet } from "react-helmet"

export const HomeLayout: React.FC = ({ children }) => {
  return (
    <Box bg="secondary.50">
      <Grid templateRows={"64px 1fr 64px"}>
        <Header />
        <Helmet>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
          </style>
        </Helmet>
        <GridItem
          as="main"
          minHeight="calc(100vh - 128px) "
          w="100vw"
          overflowX="scroll"
        >
          {children}
        </GridItem>
        <Footer />
      </Grid>
    </Box>
  )
}
