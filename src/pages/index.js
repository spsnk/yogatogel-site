import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import SEO from "src/components/seo"

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
        <Col as="section" style={{ maxWidth: "75vw", marginLeft: "auto" }}>
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
