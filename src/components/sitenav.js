import { Link } from "gatsby"
import React from "react"
import { Col, ListGroup, ListGroupItem } from "react-bootstrap"

const Sitenav = ({ activeKey, children }) => {
  // TODO migrate whole component here
  return (
    <Col sm={12} md={3} xl={2} className="pl-0">
      <aside className="text-center">
        <ListGroup
          activeKey={activeKey}
          defaultActiveKey="home"
          className="text-left"
          as="nav"
        >
          <ListGroupItem action eventKey={"home"} as={Link} to="/">
            Home
          </ListGroupItem>
          <ListGroupItem action>How to play</ListGroupItem>
          <ListGroupItem action eventKey={"account"} as={Link} to="/account">
            Account
          </ListGroupItem>
          <ListGroupItem action>Promo</ListGroupItem>
          <ListGroupItem action>News</ListGroupItem>
          <ListGroupItem action>Play</ListGroupItem>
          <ListGroupItem action>Paito</ListGroupItem>
          <ListGroupItem action eventKey={"notrng"} as={Link} to="/rng">
            Test Draw
          </ListGroupItem>
        </ListGroup>
        {children}
      </aside>
    </Col>
  )
}

export default Sitenav
