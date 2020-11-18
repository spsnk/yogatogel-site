import { globalHistory } from "@reach/router"
import { Link } from "gatsby"
import React, { useState } from "react"
import { Col, Collapse, ListGroup } from "react-bootstrap"

const Sitenav = ({ children }) => {
  const { location } = globalHistory
  let keys = location.pathname.replace("/yogatogel-site", "").split("/")
  keys = keys.map(k => (k.length > 0 ? k : "home"))
  const [account, setAccount] = useState(
    keys.length > 1 && keys[1] === "account" ? true : false
  )
  const [play, setPlay] = useState(
    keys.length > 1 && keys[1] === "play" ? true : false
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
            }}
            className={"submenu " + (account && "active")}
          >
            <span />
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
              <ListGroup.Item
                action
                as={Link}
                eventKey={"profile"}
                to="/account/profile"
              >
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
              <ListGroup.Item action eventKey={"operations"}>
                Deposit/Withdraw
              </ListGroup.Item>
            </ListGroup>
          </Collapse>
          <ListGroup.Item action>Promo</ListGroup.Item>
          <ListGroup.Item action>News</ListGroup.Item>
          <ListGroup.Item
            action
            eventKey={"play"}
            onClick={() => setPlay(!play)}
            className={"submenu " + (play && "active")}
          >
            <span />
            Play
          </ListGroup.Item>
          <Collapse in={play}>
            <ListGroup activeKey={keys[2]}>
              <ListGroup.Item action as={Link} eventKey={"4d"} to="/play/4d">
                4D
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"2d-front"}
                to="/play/2d-front"
              >
                2D DEPAN
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"2d-middle"}
                to="/play/2d-middle"
              >
                2D Tengah
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"free"}
                to="/play/free"
              >
                Colok Bebas
              </ListGroup.Item>
            </ListGroup>
          </Collapse>
          <ListGroup.Item action eventKey={"paito"} as={Link} to="/paito">
            Paito
          </ListGroup.Item>
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
