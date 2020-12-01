import React from "react"
import { Col, Row } from "react-bootstrap"
import SEO from "src/components/seo"
import UnderConstruction from "src/components/uc"

const NotFoundPage = () => (
  <>
    <Row>
      <Col sm="auto">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </Col>
      <UnderConstruction />
    </Row>
  </>
)

export default NotFoundPage
