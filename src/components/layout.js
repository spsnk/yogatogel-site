/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Footer from "./footer"
import Nav from "./navbar"
import CustomTicker from "./ticker"
import Sitenav from "./sitenav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          version
        }
      }
    }
  `)
  {
    console.log(
      "\u00A9 Prido. Software version " + data.site.siteMetadata.version
    )
  }

  return (
    <>
      <Container as="main" fluid>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <CustomTicker />
        <Row className="content">
          <Col md="3" lg="2" xg="1">
            <Sitenav />
          </Col>
          <Col md="9" lg="10" xg="11">
            {children}
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
