import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Button, Carousel, Col, Row } from "react-bootstrap"
import SEO from "src/components/seo"
import Sitenav from "src/components/sitenav"

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
        <Sitenav
          activeKey="home"
          children={
            <Button
              as={Link}
              to="/account/register?ref=exampleReferral"
              className="register-button mx-auto"
            >
              DAFTAR
            </Button>
          }
        />
        <Col as="section">
          <Carousel id="index-carousel">
            <Carousel.Item key="slide-1">
              <Img fluid={data.bg1.childImageSharp.fluid} />
            </Carousel.Item>
            <Carousel.Item key="slide-2">
              <Img fluid={data.bg2.childImageSharp.fluid} />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}
