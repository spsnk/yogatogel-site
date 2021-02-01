import Qstring from "query-string"
import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import SEO from "src/components/seo"

const Register = ({ location }) => {
  const qdata = Qstring.parse(location.search)
  const referral = qdata.ref || ""
  // TODO add validation
  return (
    <>
      <SEO title="Daftar akun" />
      <Row>
        <Col>
          <section>
            <h2>Pendaftaran</h2>
            <h5>Silahkan mengisi form pendafataran dibawah ini dengan benar</h5>
            <Form className="form-register">
              <Form.Group as={Form.Row} controlId="form-register-username">
                <Form.Label column md={3}>
                  Username
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="username" />
                  <Form.Text className="text-muted">
                    Minimal 6 karakter, tidak ada karakter khusus.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-password">
                <Form.Label column md={3}>
                  Password
                </Form.Label>
                <Col>
                  <Form.Control type="password" placeholder="password" />
                  <Form.Text className="text-muted">
                    Minimal 8 karakter, minimal satu angka dan satu huruf.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group
                as={Form.Row}
                controlId="form-register-passwordconfirm"
              >
                <Form.Label column md={3}>
                  Konfirmasi Password
                </Form.Label>
                <Col>
                  <Form.Control type="password" placeholder="password" />
                  <Form.Text className="text-muted">
                    Masukkan kata sandi Anda lagi.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-email">
                <Form.Label column md={3}>
                  Email
                </Form.Label>
                <Col>
                  <Form.Control type="email" placeholder="email@gmail.com" />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-phone">
                <Form.Label column md={3}>
                  No. Telefon
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="555-5555" />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-bank">
                <Form.Label column md={3}>
                  Bank
                </Form.Label>
                <Col>
                  <Form.Control as="select" defaultValue="bank" custom>
                    <option disabled value="bank">
                      Bank
                    </option>
                    <option value="bca">BCA</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                    <option value="mdn">Mandiri</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-fullname">
                <Form.Label column md={3}>
                  Nama Lengkap
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Nama lengkap" />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-bankaccount">
                <Form.Label column md={3}>
                  Nomor Rekening
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Nomor Rekening" />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row} controlId="form-register-referral">
                <Form.Label column md={3}>
                  Referral
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="referral username"
                    defaultValue={referral}
                  />
                </Col>
              </Form.Group>
              <Row>
                <Col md={{ offset: 3 }}>
                  <Button type="submit" variant="warning">
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </section>
        </Col>
      </Row>
    </>
  )
}

export default Register
