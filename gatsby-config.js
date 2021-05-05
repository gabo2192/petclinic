module.exports = {
  siteMetadata: {
    title: `PETCLINIC`,
    description: `Pet Clinics Directory! Find the closest to your place, track your pet's medical history, get the best offers ever!.`,
    author: `@GabrielRojas`,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/cuenta/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PetClinic`,
        short_name: `petc`,
        start_url: `/`,
        background_color: `#F6FEFC`,
        theme_color: `#7C4DFF`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
