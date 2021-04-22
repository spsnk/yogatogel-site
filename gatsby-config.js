/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()
const _apiAddress = new URL(process.env.API_URL)
const _siteAddress = new URL(process.env.SITE_ADDRESS)
module.exports = {
  pathPrefix: "/yogatogel-site",
  siteMetadata: {
    title: `Cerberus Togel`,
    description: `Cara Main Togel`,
    icon: "src/images/logo.png",
    author: `@prido`,
    version: "0.9.3",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yoga Togel`,
        short_name: `togel`,
        start_url: `/`,
        background_color: `#f8fd5f`,
        theme_color: `#450f00`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
        protocol: _siteAddress.protocol.slice(0, -1),
        hostname: _siteAddress.hostname,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
