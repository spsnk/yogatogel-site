import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Login from "./login"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faTable } from "@fortawesome/free-solid-svg-icons"

const Navmenu = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 70, quality: 80, traceSVG: { color: "#fff" }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  let isAuthenticated = false // TODO add authentication

  return (
    <Navbar
      sticky="top"
      variant="dark"
      collapseOnSelect
      expand="lg"
      className="navmenu"
      bg="togel"
      as={Row}
    >
      <Col>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Img fixed={data.logo.childImageSharp.fixed} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto text-nowrap">
              <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/paito">
                <FontAwesomeIcon icon={faTable} /> Paito
              </Nav.Link>
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/history">
                    History
                  </Nav.Link>
                  <Nav.Link as={Link} to="/deposit">
                    Deposit
                  </Nav.Link>
                </>
              ) : (
                <Login />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Col>
    </Navbar>
  )
}

export default Navmenu
