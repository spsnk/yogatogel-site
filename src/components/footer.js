import {
  faFacebookSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Row as="footer" className="align-items-center fixed-bottom">
      <Col>
        &copy; YOGA all rights reserved. YOGACORP merupakan situs judi tebak
        online sebagal negara melarang PERJUDIAN. <br />
        Segala tinkadan pelanggaran HUKUM bukan merupakan tanggung jawab
        PENGELOLA.
      </Col>
      <Col md={3} className="ml-auto d-flex align-items-center">
        Hubungi Kami:
        <a className="social wa" target="_blank" href="#">
          <FontAwesomeIcon icon={faWhatsappSquare} />
        </a>
        <a className="social fb" target="_blank" href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </Col>
    </Row>
  )
}

export default Footer
