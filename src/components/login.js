import React from "react"
import { Button, Form } from "react-bootstrap"

const handleSubmit = event => {
  event.preventDefault()
  console.log("Submited!")
}

const Login = () => {
  return (
    <Form inline onSubmit={handleSubmit} className="login">
      <Form.Group controlId="form-login-username">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="form-login-password">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Button variant="outline-light" type="submit">
          Login
        </Button>
      </Form.Group>
    </Form>
  )
}

export default Login
