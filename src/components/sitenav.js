import { globalHistory } from "@reach/router"
import { Link } from "gatsby"
import React, { useState } from "react"
import { Button, Col, Collapse, ListGroup } from "react-bootstrap"

const Sitenav = () => {
  const { location } = globalHistory
  let keys = location.pathname.replace("/yogatogel-site", "").split("/")
  keys = keys.map(k => (k.length > 0 ? k : "home"))
  const [account, setAccount] = useState(
    keys.length > 1 && keys[1] === "account" ? true : false
  )
  const [games, setGames] = useState(
    keys.length > 1 && keys[1] === "games" ? true : false
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
          <ListGroup.Item action eventKey={"paito"} as={Link} to="/paito">
            Paito
          </ListGroup.Item>
          <ListGroup.Item action>Promo</ListGroup.Item>
          <ListGroup.Item action>News</ListGroup.Item>
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
          <ListGroup.Item
            action
            eventKey={"games"}
            onClick={() => setGames(!games)}
            className={"submenu " + (games && "active")}
          >
            <span />
            Games
          </ListGroup.Item>
          <Collapse in={games}>
            <ListGroup activeKey={keys[2]}>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"xd"}
                to="/games/xd"
                state={{ game: "Xd" }}
              >
                4D, 3D, 2D
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"2dfront"}
                to="/games/2dfront"
                state={{ game: "2d-f" }}
              >
                2D Depan
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"2dmiddle"}
                to="/games/2dmiddle"
                state={{ game: "2d-m" }}
              >
                2D Tengah
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                eventKey={"free"}
                to="/games/free"
                state={{ game: "free" }}
              >
                Colok Bebas
              </ListGroup.Item>
            </ListGroup>
          </Collapse>
          <ListGroup.Item action eventKey={"markets"} as={Link} to="/markets">
            Markets
          </ListGroup.Item>
          <ListGroup.Item action eventKey={"rng"} as={Link} to="/rng">
            Test Draw
          </ListGroup.Item>
        </ListGroup>
        <Button
          as={Link}
          to="/account/register?ref=exampleReferral"
          className="register-button mx-auto"
        >
          DAFTAR
        </Button>
      </aside>
    </Col>
  )
  return menu
}

export default Sitenav
