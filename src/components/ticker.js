import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import PageVisibility from "react-page-visibility"
import Ticker from "react-ticker"

const CustomTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <Row>
      <Col md={2} sm={12} className="ticker__title">
        <p className="my-auto text-nowrap">INFO TERKINI</p>
      </Col>
      <Col md={10} sm={12}>
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
  )
}

export default CustomTicker
