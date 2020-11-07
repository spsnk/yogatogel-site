import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import PageVisibility from "react-page-visibility"
import Ticker from "react-ticker"

const CustomTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <Container className="ticker__container">
      <Row>
        <Col md={2} className="ticker__title">
          <p className="my-auto">INFO TERKINI</p>
        </Col>
        <Col>
          <PageVisibility onChange={handleVisibilityChange}>
            {pageIsVisible && (
              <Ticker>
                {() => (
                  <div className="ticker__item">
                    <h6>Running Text - New Yogacorp Togel!!! - </h6>
                  </div>
                )}
              </Ticker>
            )}
          </PageVisibility>
        </Col>
      </Row>
    </Container>
  )
}

export default CustomTicker
