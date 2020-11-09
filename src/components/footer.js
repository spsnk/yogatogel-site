import {
  faFacebookSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="align-items-center d-sm-none d-none d-md-flex">
      <Col>
        &copy; YOGA all rights reserved. YOGACORP merupakan situs judi tebak
        online sebagal negara melarang PERJUDIAN. <br />
        Segala tinkadan pelanggaran HUKUM bukan merupakan tanggung jawab
        PENGELOLA.
      </Col>
      <Col md={3} className="ml-auto d-flex align-items-center">
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
      </Col>
    </footer>
  )
}

export default Footer
