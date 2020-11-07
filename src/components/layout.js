/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import Nav from "./navbar"
import CustomTicker from "./ticker"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container as="main" fluid>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <Container fluid className="ticker__container">
          <CustomTicker />
        </Container>
        <Container fluid id="content">
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
