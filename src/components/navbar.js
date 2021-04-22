import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import Login from "./login"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faTable } from "@fortawesome/free-solid-svg-icons"

const Navmenu = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 70
            quality: 80
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff" }
            layout: FIXED
          )
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
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              alt="logo"
            />
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
