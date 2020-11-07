import React from "react"
import Qstring from "query-string"

const Register = ({ location }) => {
  console.log(location)
  const qdata = Qstring.parse(location.search)
  console.log(qdata)

  return "Hello register"
}

export default Register
