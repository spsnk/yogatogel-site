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
        <span>&copy; YOGACORP all rights reserved.</span>
        {/* <span className="d-sm-none d-none d-lg-flex">
          YOGACORP merupakan situs judi tebak online sebagal negara melarang
          PERJUDIAN. <br />
          Segala tinkadan pelanggaran HUKUM bukan merupakan tanggung jawab
          PENGELOLA.
        </span> */}
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
