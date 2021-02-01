import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Form,
  Row,
  Table,
} from "react-bootstrap"

const Game = ({ markets }) => {
  const default_game_bet = {
    number: "",
    amount: "",
  }

  const [game_bets, setGameBets] = useState([{ ...default_game_bet }])
  const [bets, setBets] = useState([])

  const [auto, setAuto] = useState("")
  const manageAuto = ({ target }) => {
    let value = target.value
    setAuto(value)
  }
  const [market, setMarket] = useState(-1)

  const [theTotal, setTheTotal] = useState(0)

  const addBet = () => {
    let bet = { ...default_game_bet }
    bet.amount = isNaN(parseInt(auto)) ? "" : auto
    setGameBets([...game_bets, bet])
  }
  const delBet = index => {
    let items = Array.from(game_bets)
    if (items.length > 1) {
      if (index > -1) {
        items.splice(index, 1)
      }
    } else {
      items = [{ ...default_game_bet }]
    }
    setGameBets(items)
    getBets(items)
  }

  const resetBets = () => {
    let items = [{ ...default_game_bet }]
    setGameBets(items)
    getBets(items)
  }

  const updateBet = ({ target }) => {
    const data = target.dataset
    let value = target.type === "checkbox" ? target.checked : target.value
    const id = data.bet
    const field = data.field
    const items = Array.from(game_bets)
    const item = items[id]
    if (field === "number" && value.length > 2) {
      value = value.slice(0, 2)
    }
    item[field] = value

    if (!isNaN(parseInt(auto))) {
      item.amount = auto
    }

    items[id] = calculateTotal(item)

    console.log(items)
    getBets(items)
    setGameBets(items)
  }

  const getBets = (actual_bets, the_market) => {
    if (market !== -1 || the_market !== undefined) {
      let tickets = []
      let this_market = markets[the_market !== undefined ? the_market : market]
      let this_games = this_market.games
      let game = this_games.free
      let the_actual_total = 0
      actual_bets.forEach(b => {
        let ticket = {
          number: b.number,
          bets: [],
          total: 0,
          totalBets: 0,
        }
        if (
          b.amount !== undefined &&
          b.number.length === 1 &&
          !isNaN(parseInt(b.amount)) &&
          b.amount > 0
        ) {
          let number = b.number
          let amount = parseInt(b.amount)
          let pretotal = amount * 1000
          let discount = Math.round(pretotal * (game.discount / 100))
          let fee = Math.round(pretotal * (game.fee / 100))
          let total = pretotal - discount + fee
          let bet = {
            game_id: game.game_id,
            game: "free",
            number: number,
            amount: amount,
            pretotal: pretotal,
            discount: discount,
            fee: fee,
            total: total,
          }
          ticket.bets.push(bet)
          ticket.total += total
        }
        tickets.push(ticket)
        the_actual_total += ticket.total
      })
      // console.log(tickets)
      setBets(tickets)
      setTheTotal(the_actual_total)
    }
  }

  const calculateTotal = item => {
    let amount =
      isNaN(parseInt(item.amount)) || !item.number || item.number.length < 2
        ? 0
        : parseInt(item.amount)

    let discount_percent = 0
    let fee_percent = 0
    if (market !== -1) {
      discount_percent = markets[market].discount
      fee_percent = markets[market].fee
    }

    let pretotal = amount * 1000

    let discount = Math.round(pretotal * (discount_percent / 100))
    let fee = Math.round(pretotal * (fee_percent / 100))
    let total = pretotal - discount + fee

    item.discount = discount
    item.fee = fee
    item.total = total
    return item
  }

  const updateMarket = e => {
    let market_id = e.target.value
    setMarket(market_id)
    resetBets()
  }

  const table_info = () => (
    <tr>
      <th>#</th>
      <th>Nomor</th>
      <th>
        <Form.Text>Taruhan</Form.Text>
        <Form.Control
          placeholder="auto"
          type="number"
          value={auto}
          onChange={manageAuto}
        />
      </th>
      <th>
        <Button
          style={{ width: "auto" }}
          title="Add Bet"
          onClick={addBet}
          className="d-md-block d-none"
        >
          <FontAwesomeIcon icon={faPlus} size="sm" />
        </Button>
      </th>
    </tr>
  )

  return (
    <>
      <Row>
        <Col>
          <h2>Colok Bebas</h2>
          <h5>IDR 1,000 = 1</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form inline>
            <Table
              striped
              hover
              responsive
              className="betTable betPanel"
              size="sm"
            >
              <thead className="table-dark">
                <tr>
                  <td colSpan={4}>
                    <Form.Group>
                      <Form.Label
                        style={{
                          fontSize: "1.8em",
                          margin: "2px 2rem 0 0",
                          padding: "0.375rem 2px",
                        }}
                      >
                        Bet Panel
                      </Form.Label>
                      <Form.Control
                        as="select"
                        className="form-control betTable inherit"
                        value={market}
                        onChange={updateMarket}
                        plaintext
                        style={{
                          fontWeight: "bolder",
                          fontSize: "2em",
                        }}
                      >
                        <option disabled value={-1}>
                          Select Market
                        </option>
                        {Object.keys(markets).map(k => (
                          <option key={k} value={k}>
                            {markets[k].name}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <div className="d-md-none d-sm-block">
                      <Button
                        style={{ width: "auto" }}
                        title="Add Bet"
                        onClick={addBet}
                      >
                        Tambah Baris <FontAwesomeIcon icon={faPlus} size="sm" />
                      </Button>
                      <Button
                        style={{ width: "auto" }}
                        variant="danger"
                        onClick={() => delBet(game_bets.length - 1)}
                      >
                        Hapus Terakhir{" "}
                        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                      </Button>
                    </div>
                  </td>
                </tr>
                {table_info()}
              </thead>
              <tbody>
                {game_bets.map((bet, index) => (
                  <tr key={`bet-${index}`}>
                    <td>
                      <Form.Control
                        plaintext={true}
                        readOnly={true}
                        value={`${index + 1}.`}
                        style={{ width: "1rem" }}
                      />
                    </td>
                    <td>
                      {[
                        [0, 1, 2, 3, 4],
                        [5, 6, 7, 8, 9],
                      ].map((tb, tbi) => (
                        <ButtonToolbar key={`tb-${tbi}`}>
                          <ButtonGroup>
                            {tb.map(n => (
                              <Button
                                key={`bbtn-${n}`}
                                data-field="number"
                                data-bet={index}
                                value={n}
                                onClick={updateBet}
                                className={
                                  bet.number !== undefined &&
                                  parseInt(bet.number) === n
                                    ? "bg-warning text-dark font-weight-bold"
                                    : ""
                                }
                              >
                                {n}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </ButtonToolbar>
                      ))}
                    </td>
                    <td>
                      <Form.Control
                        placeholder="Colok Bebas"
                        min={0}
                        type="number"
                        disabled={!bet.number || bet.number.length < 1}
                        value={bet.amount}
                        data-field="amount"
                        data-bet={index}
                        onChange={updateBet}
                      />
                    </td>
                    <td>
                      <Button
                        style={{ width: "auto" }}
                        data-bet={index}
                        variant="danger"
                        onClick={() => delBet(index)}
                        className="d-md-block d-none"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-dark">{table_info()}</tfoot>
            </Table>
          </Form>
        </Col>

        <Col>
          <Form inline>
            <Table
              striped
              responsive
              hover
              size="sm"
              className="betTable mt-3 mt-sm-3 mt-md-0"
            >
              <thead className="table-dark">
                <tr>
                  <th colSpan={3}>
                    <Form.Label
                      style={{
                        fontSize: "1.8em",
                        margin: "2px 2rem 0 0",
                        padding: "0.375rem 2px",
                      }}
                    >
                      Hasil Total
                    </Form.Label>
                  </th>
                  <th colSpan={3}>
                    <Form.Text>
                      <h6>
                        Total:{" "}
                        <strong>
                          {theTotal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </strong>{" "}
                        IDR
                      </h6>
                    </Form.Text>
                  </th>
                </tr>
              </thead>
              {bets
                .filter(t => t.bets.length > 0)
                .map((ticket, idx) => (
                  <React.Fragment key={`ticket-${idx}`}>
                    <thead className="table-dark">
                      <tr>
                        <th colSpan={3}>
                          <Form.Text>Ticket #{idx + 1}</Form.Text>
                          <Form.Label>
                            <h5 className="my-1">
                              Nomor {ticket.number} {ticket.bb ? "+ BB" : ""}
                            </h5>
                          </Form.Label>
                        </th>
                        <th colSpan={3} className="bg-warning text-dark">
                          <Form.Text>
                            <h6>
                              Ticket Bayar:{" "}
                              <strong>
                                {ticket.total
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </strong>{" "}
                              IDR
                            </h6>
                          </Form.Text>
                          <Form.Text>
                            <h6>
                              <strong>{ticket.bets.length}</strong> Taruhan
                            </h6>
                          </Form.Text>
                        </th>
                      </tr>
                      <tr>
                        <th>#</th>
                        <th>Nomor</th>
                        <th>Bet</th>
                        <th>Diskon</th>
                        <th>Bayar:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ticket.bets.map((bet, index) => (
                        <tr key={`res-${index}`}>
                          <td>
                            <Form.Control
                              plaintext={true}
                              readOnly={true}
                              value={`${index + 1}.`}
                              style={{ width: "1rem" }}
                            />
                          </td>
                          <td>
                            <Form.Control
                              plaintext={true}
                              readOnly={true}
                              value={bet.number}
                            />
                          </td>
                          <td>
                            <Form.Control
                              plaintext={true}
                              readOnly={true}
                              value={bet.pretotal
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            />
                          </td>
                          <td>
                            <Form.Control
                              plaintext={true}
                              readOnly={true}
                              value={bet.discount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            />
                          </td>
                          <td>
                            <Form.Control
                              plaintext={true}
                              readOnly={true}
                              value={bet.total
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                ))}
            </Table>
            <Button variant="warning" className="mx-auto">
              Submit
            </Button>
            <Button variant="danger" className="mx-auto" onClick={resetBets}>
              Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Game
