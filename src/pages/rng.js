import React from "react"
import { Row, Col, Form } from "react-bootstrap"
import SEO from "../components/seo"
import Sitenav from "../components/sitenav"

export default function Rng() {
  return (
    <>
      <SEO title="Daftar akun" />
      <Row>
        <Col md={3} className="pl-0">
          <aside className="text-center">
            <Sitenav activeKey="notrng" />
          </aside>
        </Col>
        <Col>
          <Form>
            <Form.Group inline controlId>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  )
}
