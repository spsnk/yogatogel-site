import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PageProps } from "gatsby"
import { navigate } from "gatsby-link"
import React, { useState } from "react"
import { Button, Col, Collapse, Form, InputGroup, Row } from "react-bootstrap"
import SEO from "src/components/seo"

const user = {
  userId: "009239123",
  username: "nyan093",
  name: "Nyan",
  //image: "cc7cf55af2f800813d456a6ae2de6fd2.jpg",
  image: null,
  email: "example@gmail.com",
  phone: "555-5555",
  credit: 269100,
  bonus: 0,
  outstandingBet: 0,
  bank: 2,
  bankAccount: "6300092193",
  bankAccountName: "Nyan Hazz",
  referral: "neko",
}

const banks = [
  {
    bank_id: 0,
    bank_name: "BCA",
    bank_shortname: "BCA",
    account_number: "9812738134123",
    account_holder: "Muhamad Arif",
    online: true,
  },
  {
    bank_id: 1,
    bank_name: "BNI",
    bank_shortname: "BNI",
    account_number: "045168648438",
    account_holder: "Muhamad Arif",
    online: true,
  },
  {
    bank_id: 2,
    bank_name: "BRI",
    bank_shortname: "BRI",
    account_number: "65114236556",
    account_holder: "Muhamad Arif",
    online: true,
  },
  {
    bank_id: 3,
    bank_name: "Mandiri",
    bank_shortname: "Mandiri",
    account_number: "2154857689",
    account_holder: "Muhamad Arif",
    online: true,
  },
]

const Operations: React.FC<PageProps> = props => {
  const operation = {
    type: "deposit",
    amount: 10000,
    security_amount: Math.floor(Math.random() * 99),
  }

  const [transaction, setTransaction] = useState(operation)

  const handleTransactionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const target = event.currentTarget
    const field = target.name
    let value: string | number = target.value
    let security_amount = 0
    if (field === "amount") {
      value = parseInt(value) | 0
    }
    if (
      (field === "type" && value === "deposit" && transaction.amount > 9999) ||
      (transaction.type === "deposit" && value > 9999)
    ) {
      security_amount = Math.floor(Math.random() * 99) + 1
    }

    setTransaction({
      ...transaction,
      [field]: value,
      security_amount: security_amount,
    })
  }

  const handleSubmit: React.FormEventHandler = event => {
    event.stopPropagation()
    event.preventDefault()
    console.log(transaction)
  }

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = e =>
    e.currentTarget.select()

  const bank = banks.find(b => user.bank === b.bank_id)

  return (
    <>
      <SEO title="User Profile" />
      <Row>
        <Col>
          <Row as="header">
            <Col>
              <h2>Deposit/Penakarin Dana</h2>
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
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Text>Deposit or Withdraw</Form.Text>
                  <Form.Control
                    as="select"
                    name="type"
                    custom
                    onChange={handleTransactionChange}
                    required
                  >
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Text>
                    Masukan jumlah dana yang sudah ditransfer
                  </Form.Text>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      value={transaction.amount}
                      onChange={handleTransactionChange}
                      onFocus={handleFocus}
                      name="amount"
                      min={transaction.type === "deposit" ? 10000 : 50000}
                      step={100}
                      placeholder="10000"
                      pattern="[0-9]+"
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>Rp.</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {transaction.type === "deposit" && (
                    <Form.Text className="text-muted">
                      Minimum deposit adalah Rp. 10.000
                    </Form.Text>
                  )}
                  {transaction.type === "withdraw" && (
                    <Form.Text className="text-muted">
                      Minimum penakarin adalah Rp. 50.000
                    </Form.Text>
                  )}
                </Form.Group>
                <Collapse in={transaction.type == "deposit"}>
                  <div style={{ paddingTop: "0.01rem" }}>
                    <h5>Silahkan transfer ke rekening dibawah ini.</h5>
                    <Form.Group>
                      <Form.Text>Deposit</Form.Text>
                      <InputGroup>
                        <Form.Control
                          readOnly
                          value={
                            (transaction.amount + transaction.security_amount) |
                            0
                          }
                        />
                        <InputGroup.Append>
                          <InputGroup.Text>Rp.</InputGroup.Text>
                          <Button type="submit" variant="warning">
                            Request
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Jumlah acak kecil telah ditambahkan untuk pemrosesan
                        lebih cepat.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Nama Bank</Form.Text>
                      <InputGroup>
                        <Form.Control readOnly value={bank?.bank_shortname} />
                        <InputGroup.Append>
                          <Button
                            variant={bank?.online ? "success" : "danger"}
                            style={{ pointerEvents: "none" }}
                          >
                            {bank?.online ? "Online" : "Offline"}
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Nomor Rekening</Form.Text>
                      <Form.Control readOnly value={bank?.account_number} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Atas Nama</Form.Text>
                      <Form.Control readOnly value={bank?.account_holder} />
                    </Form.Group>
                  </div>
                </Collapse>
                <Collapse in={transaction.type === "withdraw"}>
                  <div style={{ paddingTop: "0.01rem" }}>
                    <h5>Dana akan dikirm ke rekening berikut.</h5>
                    <Form.Group>
                      <Form.Text>
                        Jumlah Kredit yang bisa ditarik:{" "}
                        <strong>Rp. {user.credit.toLocaleString()}</strong>
                      </Form.Text>
                      <InputGroup>
                        <Form.Control readOnly value={transaction.amount} />
                        <InputGroup.Append>
                          <InputGroup.Text>Rp.</InputGroup.Text>
                          <Button type="submit" variant="warning">
                            Request
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Nama Bank</Form.Text>
                      <InputGroup>
                        <Form.Control readOnly value={bank?.bank_shortname} />
                        <InputGroup.Append>
                          <Button
                            variant={bank?.online ? "success" : "danger"}
                            style={{ pointerEvents: "none" }}
                          >
                            {bank?.online ? "Online" : "Offline"}
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Nomor Rekening</Form.Text>
                      <Form.Control readOnly value={user.bankAccount} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>Atas Nama</Form.Text>
                      <Form.Control readOnly value={user.bankAccountName} />
                    </Form.Group>
                  </div>
                </Collapse>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Operations
