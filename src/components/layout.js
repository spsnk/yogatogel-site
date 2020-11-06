/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"

import Nav from "./navbar"
import CustomTicker from "./ticker"
import Footer from "./footer"

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
      <Container as="header" fluid>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Row>
            <Col md={2}>
              <h3>Info Terkini</h3>
            </Col>
            <Col>
              <CustomTicker />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col as="main">{children}</Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
