import { Button as ChakraButton, color } from "@chakra-ui/react"
import React from "react"
import { Loading } from "../loading"

interface IButton {
  type?: "primary" | "secondary"
  loading?: boolean
  handleClick: (e: React.SyntheticEvent) => void
  size?: "lg" | "md" | "sm" | "xs"
}

export const Button: React.FC<IButton> = ({
  children,
  type,
  loading,
  handleClick,
  size,
}) => {
  let colorScheme

  switch (type) {
    case "primary":
      colorScheme = "brand"
      break
    case "secondary":
      colorScheme = "secondary"
      break
    default:
      colorScheme = "brand"
  }

  return (
    <ChakraButton
      colorScheme={colorScheme}
      onClick={handleClick}
      size={size || "md"}
    >
      {loading ? <Loading /> : children}
    </ChakraButton>
  )
}
