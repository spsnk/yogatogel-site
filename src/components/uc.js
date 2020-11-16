import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Col } from "react-bootstrap"

const UnderConstruction = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "under-construction.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            traceSVG: { color: "#000000", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Col xs="auto" className="mx-auto">
      <div style={{ width: "60vh" }}>
        <Img fluid={image.childImageSharp.fluid} alt="under construction" />
      </div>
    </Col>
  )
}

export default UnderConstruction
