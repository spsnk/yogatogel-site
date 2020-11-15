import { Link, navigate } from "gatsby"
import React, { useState } from "react"
import { Col, Collapse, ListGroup } from "react-bootstrap"
import { globalHistory } from "@reach/router"

const Sitenav = ({ children }) => {
  const { location } = globalHistory
  let keys = location.pathname.split("/")
  keys = keys.map(k => (k.length > 0 ? k : "home"))
  const [account, setAccount] = useState(
    keys[1] && keys[1] === "account" ? true : false
  )
  const menu = (
    <Col xs="auto" className="pl-0">
      <aside className="text-center">
        <ListGroup
          activeKey={keys[1]}
          defaultActiveKey="home"
          className="sitenav text-left"
          as="nav"
        >
          <ListGroup.Item action eventKey={"home"} as={Link} to="/">
            Home
          </ListGroup.Item>
          <ListGroup.Item action>How to play</ListGroup.Item>
          <ListGroup.Item
            action
            eventKey={"account"}
            onClick={() => {
              setAccount(!account)
              navigate("/account/")
            }}
            className="submenu"
          >
            Account
          </ListGroup.Item>
          <Collapse in={account}>
            <ListGroup activeKey={keys[2]}>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"login"}
                to="/account/login"
              >
                Login
              </ListGroup.Item>
              <ListGroup.Item action as={Link} eventKey={"home"} to="/account/">
                Profile
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"register"}
                to="/account/register"
              >
                Register
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"recover"}
                to="/account/recover"
              >
                Recover Password
              </ListGroup.Item>
            </ListGroup>
          </Collapse>
          <ListGroup.Item action>Promo</ListGroup.Item>
          <ListGroup.Item action>News</ListGroup.Item>
          <ListGroup.Item action>Play</ListGroup.Item>
          <ListGroup.Item action>Paito</ListGroup.Item>
          <ListGroup.Item action eventKey={"rng"} as={Link} to="/rng">
            Test Draw
          </ListGroup.Item>
        </ListGroup>
        {children}
      </aside>
    </Col>
  )
  return menu
}

export default Sitenav
