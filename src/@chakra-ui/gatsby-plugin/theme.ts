import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#D0C0FF",
      100: "#C7B3FF",
      200: "#B49AFF",
      300: "#A280FF",
      400: "#8F66FF",
      500: "#7C4DFF",
      600: "#4400FF",
      700: "#2F00B3",
      800: "#1B0066",
      900: "#07001A",
    },
    secondary: {
      50: "#E6FCF6",
      100: "#CFF9EE",
      200: "#A1F4DF",
      300: "#74EECF",
      400: "#46E9C0",
      500: "#1BE1AF",
      600: "#16B38C",
      700: "#108668",
      800: "#0B5845",
      900: "#052B21",
    },
  },
  fonts: {
    body: "Comfortaa, system-ui, serif",
    heading: "Comfortaa, serif",
    mono: "Menlo, monospace",
  },
})

export default theme
