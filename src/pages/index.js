import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import SEO from "src/components/seo"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      bg1: file(relativePath: { eq: "bg1.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: {
              color: "#0e305d"
              turnPolicy: TURNPOLICY_MINORITY
            }
            layout: FULL_WIDTH
            transformOptions: { fit: COVER }
          )
        }
      }
      bg2: file(relativePath: { eq: "bg2.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: {
              color: "#0e305d"
              turnPolicy: TURNPOLICY_MINORITY
            }
            layout: FULL_WIDTH
            transformOptions: { fit: COVER }
          )
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Row>
        <Col as="section">
          <Carousel id="index-carousel">
            <Carousel.Item
              key="slide-1"
              style={{
                maxHeight: "calc(100vh - (103px + 36px + 72px))",
              }}
            >
              <GatsbyImage
                image={data.bg1.childImageSharp.gatsbyImageData}
                // style={{ maxHeight: "calc(100vh - (103px + 36px + 72px))" }}
                alt="Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item
              key="slide-2"
              style={{
                maxHeight: "calc(100vh - (103px + 36px + 72px))",
              }}
            >
              <GatsbyImage
                image={data.bg2.childImageSharp.gatsbyImageData}
                // style={{ maxHeight: "calc(100vh - (103px + 36px + 72px))" }}
                alt="Carousel 2"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}
