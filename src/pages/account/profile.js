import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useRef, useState } from "react"
import {
  Button,
  Col,
  Collapse,
  Fade,
  Form,
  FormControl,
  Image,
  InputGroup,
  Overlay,
  Row,
  Tooltip,
} from "react-bootstrap"
import SEO from "src/components/seo"
import Sitenav from "src/components/sitenav"

const Profile = location => {
  const data = useStaticQuery(graphql`
    query {
      default: file(relativePath: { eq: "default-user.png" }) {
        childImageSharp {
          fixed(width: 200, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const user = {
    userId: "009239123",
    username: "nyan093",
    name: "Nyan",
    // image: "cc7cf55af2f800813d456a6ae2de6fd2.jpg",
    email: "example@gmail.com",
    phone: "555-5555",
    credit: 2.691,
    bonus: 0,
    outstandingBet: 0,
    bank: "2",
    bankAccount: "6300092193",
    bankAccountName: "Nyan Hazz",
    referral: "neko",
  }

  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)
  const [bank, setBank] = useState(user.bank)
  const tooltipTarget = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    // TODO send data to server and authenticate
    setEdit(false)
  }

  return (
    <>
      <SEO title="User Profile" />
      <Row>
        <Sitenav />
        <Col>
          <Row as="header">
            <Col>
              <h2>Profile</h2>
            </Col>
            <Col xs="auto">
              <Button
                className="pill btn-logout"
                variant="outline-primary"
                onClick={() => navigate("/account/login")}
              >
                Log Out
                <FontAwesomeIcon
                  className="ml-1"
                  size="lg"
                  icon={faArrowLeft}
                />
              </Button>
            </Col>
          </Row>
          <Row as="section">
            <Col>
              <h3>Personal Info</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="userinfo-userid">
                  <Form.Control
                    type="text"
                    readOnly={true}
                    value={user.userId}
                    hidden={true}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-username">
                  <Form.Control
                    type="text"
                    readOnly={true}
                    value={user.username}
                    hidden={true}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-displayName">
                  <Form.Text>Display Name</Form.Text>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    value={user.name}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-email">
                  <Form.Text>Email</Form.Text>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    value={user.email}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-phone">
                  <Form.Text>No. Telefon</Form.Text>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    value={user.phone}
                  />
                </Form.Group>
                <h4>Rekening Bank</h4>
                <Form.Group controlId="userinfo-bank">
                  <Form.Text>Bank</Form.Text>
                  <select
                    defaultValue={user.bank}
                    disabled={!edit}
                    onBlur={({ target }) =>
                      setBank(target.options[target.selectedIndex].value)
                    }
                    className="form-control custom-select"
                  >
                    <option value="1">BCA</option>
                    <option value="2">BNI</option>
                    <option value="3">BRI</option>
                    <option value="4">Mandiri</option>
                  </select>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    defaultValue={user.bank}
                    value={bank}
                    hidden={true}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-bankAccount">
                  <Form.Text>No. Rekening</Form.Text>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    value={user.bankAccount}
                  />
                </Form.Group>
                <Form.Group controlId="userinfo-bankAccountName">
                  <Form.Text>Atas Nama</Form.Text>
                  <Form.Control
                    type="text"
                    readOnly={!edit}
                    value={user.bankAccountName}
                  />
                </Form.Group>
                <div>
                  <Button
                    onClick={() => setEdit(!edit)}
                    variant={edit ? "danger" : "primary"}
                  >
                    {edit ? "Cancel" : "Edit"}
                  </Button>
                  <Fade in={edit}>
                    <Button type="submit">Save</Button>
                  </Fade>
                </div>
                <Collapse in={edit}>
                  <div className="p-0 m-0">
                    <Form.Group controlId="userinfo-password">
                      <Form.Text>
                        Enter current password to confirm changes
                      </Form.Text>
                      <Form.Control
                        type="password"
                        readOnly={!edit}
                        placeholder="Password"
                      />
                    </Form.Group>
                  </div>
                </Collapse>
              </Form>
            </Col>
            <Col>
              <h3>Account Info</h3>
              <Form>
                <Form.Group>
                  <Form.Text>Credit</Form.Text>
                  <Form.Control
                    type="number"
                    readOnly={true}
                    value={user.credit}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Text>Bonus Tertahan</Form.Text>
                  <Form.Control
                    type="number"
                    readOnly={true}
                    value={user.bonus}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Text>Outstanding Bet</Form.Text>
                  <Form.Control
                    type="number"
                    readOnly={true}
                    value={user.outstandingBet}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <h3>Picture</h3>
              <div className="text-center align-items-center d-flex flex-column">
                {user.image && user.image.length > 0 ? (
                  <Image
                    width={200}
                    height={200}
                    roundedCircle
                    style={{ objectFit: "cover", display: "block" }}
                    src={`/avatars/${user.image}`}
                    alt="User profile"
                  />
                ) : (
                  <Img
                    className="rounded-circle"
                    fixed={data.default.childImageSharp.fixed}
                    alt="User profile"
                  />
                )}
                <p>
                  <span>{user.name}</span>
                </p>
                <p>
                  <span>Username: {user.username}</span>
                </p>
              </div>
              <h3>Referensi</h3>
              <Form>
                <Form.Group>
                  <Form.Text>Referral Upline</Form.Text>
                  <Form.Control
                    readOnly={true}
                    value={user.referral}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Text>Link Referral Saya</Form.Text>
                  <InputGroup>
                    <FormControl
                      ref={tooltipTarget}
                      readOnly={true}
                      style={{
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                      }}
                      value={`${location.location.href}register/?ref=${user.username}`}
                    />
                    <InputGroup.Append
                      style={{
                        marginLeft: "-15px",
                      }}
                    >
                      <Button
                        style={{
                          borderTopLeftRadius: "0 !important",
                          borderBottomLeftRadius: "0 !important",
                          width: "auto",
                          margin: 0,
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${location.location.href}register/?ref=${user.username}`
                          )
                          setShow(true)
                          setTimeout(() => setShow(false), 2000)
                        }}
                      >
                        Copy
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Overlay
                    target={tooltipTarget.current}
                    placement="left"
                    show={show}
                  >
                    {props => <Tooltip {...props}>Copied!</Tooltip>}
                  </Overlay>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Profile
