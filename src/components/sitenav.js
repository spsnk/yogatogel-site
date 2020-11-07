import { Link } from "gatsby"
import React from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"

const Sitenav = ({ activeKey }) => {
  return (
    <ListGroup
      activeKey={activeKey}
      defaultActiveKey="home"
      className="text-left"
      as="nav"
    >
      <ListGroupItem action eventKey={"home"} as={Link} to="/">
        Home
      </ListGroupItem>
      <ListGroupItem action>Pendaftaran</ListGroupItem>
      <ListGroupItem action>Lupa Password</ListGroupItem>
      <ListGroupItem action>Cara Main</ListGroupItem>
      <ListGroupItem action>Promo</ListGroupItem>
      <ListGroupItem action>Buku Mimpi</ListGroupItem>
      <ListGroupItem action>History Nomor</ListGroupItem>
      <ListGroupItem action>Referral</ListGroupItem>
    </ListGroup>
  )
}

export default Sitenav
