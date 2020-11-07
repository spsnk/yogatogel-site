import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Button, Carousel, Col, Row } from "react-bootstrap"
import SEO from "../components/seo"
import Sitenav from "../components/sitenav"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      bg1: file(relativePath: { eq: "bg1.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            traceSVG: { color: "#0e305d", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bg2: file(relativePath: { eq: "bg2.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            traceSVG: { color: "#0e305d", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Row>
        <Col md={3} className="pl-0">
          <aside className="text-center">
            <Sitenav activeKey="home" />
            <Button
              as={Link}
              to="/register?ref=neko"
              className="register-button mx-auto"
            >
              <h2>DAFTAR</h2>
            </Button>
          </aside>
        </Col>
        <Col>
          <section>
            <Carousel id="index-carousel">
              <Carousel.Item key="slide-1">
                <Img fluid={data.bg1.childImageSharp.fluid} />
              </Carousel.Item>
              <Carousel.Item key="slide-2">
                <Img fluid={data.bg2.childImageSharp.fluid} />
              </Carousel.Item>
            </Carousel>
          </section>
        </Col>
      </Row>
    </>
  )
}
