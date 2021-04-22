import {
  faFacebookSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Row as="footer" className="align-items-center">
      <Col>
        <span>&copy; Prido all rights reserved.</span>
      </Col>
      <Col className="ml-auto d-flex align-items-center">
        <div className="ml-auto d-flex align-items-center">
          Hubungi Kami:
          <a
            className="social wa"
            target="_blank"
            href="https://whatsapp.com"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsappSquare} />
          </a>
          <a
            className="social fb"
            target="_blank"
            href="https://facebook.com"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
