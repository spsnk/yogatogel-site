import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Col } from "react-bootstrap"

const UnderConstruction = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "under-construction.png" }) {
        childImageSharp {
          gatsbyImageData(
            tracedSVGOptions: {
              color: "#000000"
              turnPolicy: TURNPOLICY_MINORITY
            }
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

  return (
    <Col xs="auto" className="mx-auto">
      <div style={{ width: "60vh" }}>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="under construction"
        />
      </div>
    </Col>
  )
}

export default UnderConstruction
