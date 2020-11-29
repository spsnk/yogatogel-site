import React from "react"
import { Row } from "react-bootstrap"
import LoginComponent from "src/components/login"
import UnderConstruction from "src/components/uc"

const Login = () => {
  return (
    <Row>
      <LoginComponent />
      <UnderConstruction />
    </Row>
  )
}

export default Login
