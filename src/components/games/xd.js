import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { findPermutations } from "src/util/functions"

const Xd = ({ markets }) => {
  const default_game_bet = {
    number: "",
    d4: "",
    d3: "",
    d2: "",
    bb: false,
  }

  const [game_bets, setGameBets] = useState([{ ...default_game_bet }])
  const [bets, setBets] = useState([])

  const [auto, setAuto] = useState({
    auto4d: "",
    auto3d: "",
    auto2d: "",
  })
  const manageAuto = ({ target }) => {
    let game = target.dataset.game
    let value = target.value
    setAuto({ ...auto, [game]: value })
  }
  const [market, setMarket] = useState(-1)

  const [theTotal, setTheTotal] = useState(0)

  const addBet = () => {
    let bet = { ...default_game_bet }
    bet.d4 = isNaN(parseInt(auto.auto4d)) ? "" : auto.auto4d
    bet.d3 = isNaN(parseInt(auto.auto3d)) ? "" : auto.auto3d
    bet.d2 = isNaN(parseInt(auto.auto2d)) ? "" : auto.auto2d
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
    if (field === "number" && value.length > 4) {
      value = value.slice(0, 4)
    }
    item[field] = value

    if (!isNaN(parseInt(auto.auto4d))) {
      item.d4 = auto.auto4d
    }
    if (!isNaN(parseInt(auto.auto3d))) {
      item.d3 = auto.auto3d
    }
    if (!isNaN(parseInt(auto.auto2d))) {
      item.d2 = auto.auto2d
    }

    items[id] = calculateTotal(item)

    // console.log(items)
    getBets(items)
    setGameBets(items)
  }

  const getBets = (actual_bets, the_market) => {
    if (market !== -1 || the_market !== undefined) {
      let tickets = []
      let this_market = markets[the_market !== undefined ? the_market : market]
      let this_games = this_market.games
      let d4 = this_games.d4
      let d3 = this_games.d3
      let d2 = this_games.d2
      let the_actual_total = 0
      actual_bets.forEach(b => {
        let ticket = {
          number: b.number,
          bets: [],
          total: 0,
          totalBets: 0,
          bb: b.bb,
        }
        if (
          d4 !== undefined &&
          b.number.length > 3 &&
          !isNaN(parseInt(b.d4)) &&
          b.d4 > 0
        ) {
          let number = b.number
          let amount = parseInt(b.d4)
          let pretotal = amount * 1000
          let discount = Math.round(pretotal * (d4.discount / 100))
          let fee = Math.round(pretotal * (d4.fee / 100))
          let total = pretotal - discount + fee
          let bet = {
            game_id: d4.game_id,
            game: "4d",
            number: number,
            amount: amount,
            pretotal: pretotal,
            discount: discount,
            fee: fee,
            total: total,
          }
          if (b.bb) {
            let _bbets = getBB(bet)
            _bbets.forEach(bb => {
              ticket.bets.push(bb)
            })
            ticket.total += bet.total * _bbets.length
          } else {
            ticket.bets.push(bet)
            ticket.total += total
          }
        }
        if (
          d3 !== undefined &&
          b.number.length > 2 &&
          !isNaN(parseInt(b.d3)) &&
          b.d3 > 0
        ) {
          let number = b.number.slice(b.number.length - 3)
          let amount = parseInt(b.d3)
          let pretotal = amount * 1000
          let discount = Math.round(pretotal * (d3.discount / 100))
          let fee = Math.round(pretotal * (d3.fee / 100))
          let total = pretotal - discount + fee
          let bet = {
            game_id: d3.game_id,
            game: "3d",
            number: number,
            amount: amount,
            pretotal: pretotal,
            discount: discount,
            fee: fee,
            total: total,
          }
          if (b.bb) {
            let _bbets = getBB(bet)
            _bbets.forEach(bb => {
              ticket.bets.push(bb)
            })
            ticket.total += bet.total * _bbets.length
          } else {
            ticket.bets.push(bet)
            ticket.total += total
          }
        }
        if (
          d2 !== undefined &&
          b.number.length > 1 &&
          !isNaN(parseInt(b.d2)) &&
          b.d2 > 0
        ) {
          let number = b.number.slice(b.number.length - 2)
          let amount = parseInt(b.d2)
          let pretotal = amount * 1000
          let discount = Math.round(pretotal * (d2.discount / 100))
          let fee = Math.round(pretotal * (d2.fee / 100))
          let total = pretotal - discount + fee
          let bet = {
            game_id: d2.game_id,
            game: "2d",
            number: number,
            amount: amount,
            pretotal: pretotal,
            discount: discount,
            fee: fee,
            total: total,
          }
          if (b.bb) {
            let _bbets = getBB(bet)
            _bbets.forEach(bb => {
              ticket.bets.push(bb)
            })
            ticket.total += bet.total * _bbets.length
          } else {
            ticket.bets.push(bet)
            ticket.total += total
          }
        }
        tickets.push(ticket)
        the_actual_total += ticket.total
      })
      setBets(tickets)
      setTheTotal(the_actual_total)
    }
  }

  const calculateTotal = item => {
    let fod =
      isNaN(parseInt(item.d4)) || !item.number || item.number.length < 4
        ? 0
        : parseInt(item.d4)
    let thd =
      isNaN(parseInt(item.d3)) || !item.number || item.number.length < 3
        ? 0
        : parseInt(item.d3)
    let twd =
      isNaN(parseInt(item.d2)) || !item.number || item.number.length < 2
        ? 0
        : parseInt(item.d2)

    let discount_percent = 0
    let fee_percent = 0
    if (market !== -1) {
      discount_percent = markets[market].discount
      fee_percent = markets[market].fee
    }

    let pretotal = fod * 1000 + thd * 1000 + twd * 1000

    let discount = Math.round(pretotal * (discount_percent / 100))
    let fee = Math.round(pretotal * (fee_percent / 100))
    let total = pretotal - discount + fee

    item.discount = discount
    item.fee = fee
    item.total = total
    return item
  }

  const getBB = bb_bet => {
    let bet_number = bb_bet.number
    let combinations = findPermutations(bet_number)
    let items = []
    combinations.forEach(number => {
      let bet = { ...bb_bet }
      bet.number = number
      items.push(bet)
    })
    return items
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
        <Form.Text>Taruhan 4D</Form.Text>
        <Form.Control
          placeholder="auto"
          data-game="auto4d"
          type="number"
          value={auto.auto4d}
          onChange={manageAuto}
        />
      </th>
      <th>
        <Form.Text>Taruhan 3D</Form.Text>
        <Form.Control
          placeholder="auto"
          data-game="auto3d"
          type="number"
          value={auto.auto3d}
          onChange={manageAuto}
        />
      </th>
      <th>
        <Form.Text>Taruhan 2D</Form.Text>
        <Form.Control
          placeholder="auto"
          data-game="auto2d"
          type="number"
          value={auto.auto2d}
          onChange={manageAuto}
        />
      </th>
      <th>BB</th>
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
          <h2>Game 4D, 3D, 2D</h2>
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
                  <td colSpan={7}>
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
                      <Form.Control
                        placeholder="ABCD"
                        min={0}
                        type="number"
                        max={9999}
                        pattern="[0-9]{2,4}"
                        maxLength={4}
                        value={bet.number}
                        data-field="number"
                        data-bet={index}
                        onChange={updateBet}
                      />
                    </td>
                    <td>
                      <Form.Control
                        placeholder="4D"
                        min={0}
                        type="number"
                        disabled={!bet.number || bet.number.length < 4}
                        value={bet.d4}
                        data-field="d4"
                        data-bet={index}
                        onChange={updateBet}
                      />
                    </td>
                    <td>
                      <Form.Control
                        placeholder="3D"
                        min={0}
                        type="number"
                        disabled={!bet.number || bet.number.length < 3}
                        value={bet.d3}
                        data-field="d3"
                        data-bet={index}
                        onChange={updateBet}
                      />
                    </td>
                    <td>
                      <Form.Control
                        placeholder="2D"
                        min={0}
                        type="number"
                        disabled={!bet.number || bet.number.length < 2}
                        value={bet.d2}
                        data-field="d2"
                        data-bet={index}
                        onChange={updateBet}
                      />
                    </td>

                    <td>
                      <Form.Check
                        type="switch"
                        id={`bb-bet-${index}`}
                        data-field="bb"
                        data-bet={index}
                        checked={bet.bb}
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

export default Xd
