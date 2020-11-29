import React from "react"
import { Col, Row } from "react-bootstrap"
import Game from "src/components/games/xd"

const Play = () => {
  return (
    <Row>
      <Col>
        <h2>Game 4D, 3D, 2D</h2>
        <h5>IDR 1,000 = 1</h5>
        <Game />
      </Col>
    </Row>
  )
}

export default Play
