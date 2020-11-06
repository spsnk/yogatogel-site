import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import SEO from "../components/seo"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      bg1: file(relativePath: { eq: "bg1.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            traceSVG: { color: "#0e305d", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Row>
        <Col md={3}>
          <aside className="text-center">
            <ListGroup
              defaultActiveKey="nav-home"
              className="text-left"
              as="nav"
            >
              <ListGroupItem action eventKey="nav-home" as={Link} to="/">
                Home
              </ListGroupItem>
              <ListGroupItem action>Pendaftaran</ListGroupItem>
              <ListGroupItem action>Lupa Password</ListGroupItem>
              <ListGroupItem action>Cara Main</ListGroupItem>
              <ListGroupItem action>Promo</ListGroupItem>
              <ListGroupItem action>Buku Mimpi</ListGroupItem>
              <ListGroupItem action>History Nomor</ListGroupItem>
              <ListGroupItem action>Referral</ListGroupItem>
            </ListGroup>
            <Button className="register-button mx-auto">
              <h2>DAFTAR</h2>
            </Button>
          </aside>
        </Col>
        <Col>
          <section>
            <Img fluid={data.bg1.childImageSharp.fluid} />
          </section>
        </Col>
      </Row>
    </>
  )
}
