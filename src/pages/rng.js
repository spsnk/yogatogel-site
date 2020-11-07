import React, { useState } from "react"
import { Badge, Button, Col, Form, Row, Table } from "react-bootstrap"
import SEO from "../components/seo"
import Sitenav from "../components/sitenav"

export default function Rng() {
  const [values, setValues] = useState({
    one: 9,
    rone: true,
    two: 9,
    rtwo: true,
    three: 9,
    rthree: true,
    four: 9,
    rfour: true,
  })

  const [numbers, setNumbers] = useState([])

  const addNumber = number => {
    setValues({
      ...values,
      one: number[0],
      two: number[1],
      three: number[2],
      four: number[3],
    })

    const numberComponent = (
      <tr>
        <Badge pill className="m-1" variant="primary">
          {number[0]}
        </Badge>
        <Badge pill className="m-1" variant="secondary">
          {number[1]}
        </Badge>
        <Badge pill className="m-1" variant="danger">
          {number[2]}
        </Badge>
        <Badge pill className="m-1" variant="info">
          {number[3]}
        </Badge>
      </tr>
    )

    setNumbers([numberComponent, ...numbers])
  }

  const handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.id
    console.log(event.target)
    setValues({ ...values, [name]: value })
  }

  const randomize = e => {
    e.preventDefault()

    let number = [
      values.rone ? Math.floor(Math.random() * 10) : values.one,
      values.rtwo ? Math.floor(Math.random() * 10) : values.two,
      values.rthree ? Math.floor(Math.random() * 10) : values.three,
      values.rfour ? Math.floor(Math.random() * 10) : values.four,
    ]
    console.log(number)
    addNumber(number)
  }
  return (
    <>
      <SEO title="Daftar akun" />
      <Row>
        <Col md={3} className="pl-0">
          <aside className="text-center">
            <Sitenav activeKey="notrng" />
          </aside>
        </Col>
        <Col className="pt-5">
          <Form onSubmit={randomize}>
            <Form.Row>
              <Col>
                <Form.Group controlId="one">
                  <Form.Control
                    type="number"
                    placeholder={9}
                    onChange={handleChange}
                    value={values.one}
                  />
                  <Form.Label>First number</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="rone">
                  <Form.Check
                    type="checkbox"
                    label="Random?"
                    onChange={handleChange}
                    checked={values.rone}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="two">
                  <Form.Control
                    type="number"
                    placeholder={9}
                    onChange={handleChange}
                    value={values.two}
                  />
                  <Form.Label>Second number</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="rtwo">
                  <Form.Check
                    type="checkbox"
                    label="Random?"
                    onChange={handleChange}
                    checked={values.rtwo}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="three">
                  <Form.Control
                    type="number"
                    placeholder={9}
                    onChange={handleChange}
                    value={values.three}
                  />
                  <Form.Label>Third number</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="rthree">
                  <Form.Check
                    type="checkbox"
                    label="Random?"
                    onChange={handleChange}
                    checked={values.rthree}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="four">
                  <Form.Control
                    type="number"
                    placeholder={9}
                    onChange={handleChange}
                    value={values.four}
                  />
                  <Form.Label>Fourth number</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="rfour">
                  <Form.Check
                    type="checkbox"
                    label="Random?"
                    onChange={handleChange}
                    checked={values.rfour}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Button type="submit">Draw</Button>
              </Col>
              <Col>
                <Button variant="warning" onClick={() => setNumbers([])}>
                  Clear
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col md={6} className="pt-5">
          <h5>Generated Numbers</h5>
          <Table>{numbers}</Table>
        </Col>
      </Row>
    </>
  )
}
