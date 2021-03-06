/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require("bootstrap/dist/css/bootstrap.min.css")
require("./src/assets/main.css")

const React = require("react")
const Layout = require("./src/components/layout").default
const version = require("./package.json").version

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  console.log("\u00A9 Prido. Togel v" + version)
  if (typeof window.IntersectionObserver === `undefined`) {
    require(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
