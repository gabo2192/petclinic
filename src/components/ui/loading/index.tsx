import { Grid } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import React from "react"

interface ILoading {
  fullpage?: boolean
}

export const Loading: React.FC<ILoading> = ({ fullpage }) => (
  <Grid placeContent="center" height={fullpage && `calc(100vh - 128px)`}>
    <Spinner
      color="brand.500"
      size={fullpage && "xl"}
      thickness={fullpage && "4px"}
    />
  </Grid>
)
