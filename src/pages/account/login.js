import React from "react"
import { Row } from "react-bootstrap"
import Sitenav from "src/components/sitenav"
import UnderConstruction from "src/components/uc"
import LoginComponent from "src/components/login"

const Login = () => {
  return (
    <Row>
      <Sitenav />
      <LoginComponent />
      <UnderConstruction />
    </Row>
  )
}

export default Login
