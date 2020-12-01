import {
  faExpandArrowsAlt,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { findPermutations } from "src/util/functions"

const Xd = () => {
  const markets = {
    0: {
      name: "Indonesia",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 3,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 5,
        },
        d2: {
          game_id: 3213,
          discount: 0,
          fee: 10,
        },
      },
    },
    1: {
      name: "China",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 3,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 5,
        },
        d2: {
          game_id: 3213,
          discount: 0,
          fee: 10,
        },
      },
    },
    2: {
      name: "Texas",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 3,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 5,
        },
        d2: {
          game_id: 3213,
          discount: 0,
          fee: 10,
        },
      },
    },
    3: {
      name: "Mexico Mega",
      games: {
        d4: {
          game_id: 234,
          discount: 0,
          fee: 0,
        },
        d3: {
          game_id: 2138,
          discount: 0,
          fee: 0,
        },
        d2: {
          game_id: 3213,
          discount: 0,
          fee: 0,
        },
      },
    },
  }
  const default_game_bet = {
    number: "",
    d4: "",
    d3: "",
    d2: "",
  }

  const [game_bets, setGameBets] = useState([{ ...default_game_bet }])
  const [bets, setBets] = useState([])

  const [auto, setAuto] = useState({
    auto4d: false,
    auto3d: false,
    auto2d: false,
  })
  const manageAuto = e => {
    let game = e.target.dataset.game
    setAuto({ ...auto, [game]: !auto[game] })
  }
  const [market, setMarket] = useState(-1)

  const [theTotal, setTheTotal] = useState(0)

  const addBet = () => {
    let bet = { ...default_game_bet }
    if (game_bets.length > 0) {
      bet.d4 = auto.auto4d ? game_bets[game_bets.length - 1].d4 : ""
      bet.d3 = auto.auto3d ? game_bets[game_bets.length - 1].d3 : ""
      bet.d2 = auto.auto2d ? game_bets[game_bets.length - 1].d2 : ""
    }
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

  const updateBet = e => {
    let data = e.target.dataset
    let value = e.target.value
    let id = data.bet
    let field = data.field
    let items = Array.from(game_bets)
    let item = items[id]
    if (field === "number" && value.length > 4) {
      value = value.slice(0, 4)
    }
    item[field] = value
    items[id] = calculateTotal(item)

    getBets(items)
    setGameBets(items)
  }

  const getBets = (actual_bets, the_market) => {
    if (market !== -1 || the_market !== undefined) {
      let items = []
      let this_market = markets[the_market !== undefined ? the_market : market]
      let this_games = this_market.games
      let d4 = this_games.d4
      let d3 = this_games.d3
      let d2 = this_games.d2
      let already_used = []
      let the_actual_total = 0
      actual_bets.forEach(b => {
        if (
          d4 !== undefined &&
          b.number.length > 3 &&
          !isNaN(parseInt(b.d4)) &&
          b.d4 > 0
        ) {
          let number = b.number
          if (!already_used.includes(number)) {
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
            the_actual_total += total
            items.push(bet)
            already_used.push(number)
          }
        }
        if (
          d3 !== undefined &&
          b.number.length > 2 &&
          !isNaN(parseInt(b.d3)) &&
          b.d3 > 0
        ) {
          let number = b.number.slice(b.number.length - 3)
          if (!already_used.includes(number)) {
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
            the_actual_total += total
            items.push(bet)
            already_used.push(number)
          }
        }
        if (
          d2 !== undefined &&
          b.number.length > 1 &&
          !isNaN(parseInt(b.d2)) &&
          b.d2 > 0
        ) {
          let number = b.number.slice(b.number.length - 2)
          if (!already_used.includes(number)) {
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
            the_actual_total += total
            items.push(bet)
            already_used.push(number)
          }
        }
      })
      setBets(items)
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

  const addBB = e => {
    let id = e.currentTarget.dataset.bet
    let bet_number = game_bets[id].number
    let combinations = findPermutations(bet_number)
    let items = [...game_bets]
    combinations.forEach(number => {
      if (bet_number !== number) {
        let bet = { ...game_bets[id] }
        bet.number = number
        items.push(bet)
      }
    })
    getBets(items)
    setGameBets(items)
  }

  const updateMarket = e => {
    let market_id = e.target.value
    setMarket(market_id)
    getBets(game_bets, market_id)
  }

  const table_info = () => (
    <tr>
      <th>#</th>
      <th>Nomor</th>
      <th>
        <Form.Text>Taruhan 4D</Form.Text>
        <Form.Check
          inline
          label="auto"
          type="switch"
          id={Math.random().toString(36).substr(2, 9)}
          data-game="auto4d"
          checked={auto.auto4d}
          onChange={manageAuto}
        />
      </th>
      <th>
        <Form.Text>Taruhan 3D</Form.Text>
        <Form.Check
          inline
          label="auto"
          type="switch"
          id={Math.random().toString(36).substr(2, 9)}
          data-game="auto3d"
          checked={auto.auto3d}
          onChange={manageAuto}
        />
      </th>
      <th>
        <Form.Text>Taruhan 2D</Form.Text>
        <Form.Check
          inline
          label="auto"
          type="switch"
          id={Math.random().toString(36).substr(2, 9)}
          data-game="auto2d"
          checked={auto.auto2d}
          onChange={manageAuto}
        />
      </th>
      <th>BB</th>
      <th>
        <Button style={{ width: "auto" }} title="Add Bet" onClick={addBet}>
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
                        plaintext
                        className="form-control betTable"
                        value={market}
                        onChange={updateMarket}
                        style={{ fontWeight: "bolder", fontSize: "2em" }}
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
                      <Button
                        variant="warning"
                        style={{ width: "auto" }}
                        data-bet={index}
                        onClick={addBB}
                        disabled={!bet.number || bet.number.length < 2}
                      >
                        <FontAwesomeIcon icon={faExpandArrowsAlt} size="sm" />
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{ width: "auto" }}
                        data-bet={index}
                        variant="danger"
                        onClick={() => delBet(index)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-dark">{table_info()}</tfoot>
            </Table>
            <Button variant="warning" className="mx-auto">
              Submit
            </Button>
            <Button variant="danger" className="mx-auto" onClick={resetBets}>
              Clear
            </Button>
          </Form>
        </Col>

        <Col>
          <Table
            striped
            responsive
            hover
            size="sm"
            className="betTable mt-3 mt-sm-3 mt-md-0"
          >
            <thead className="table-dark">
              <tr className="bg-warning text-dark">
                <th colSpan={7} className="text-center">
                  <Form.Text>
                    <h6>
                      Total:{" "}
                      <strong>
                        {theTotal
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </strong>
                    </h6>
                  </Form.Text>
                  <Form.Text>
                    <h6>
                      <strong>{bets.length}</strong> Taruhan
                    </h6>
                  </Form.Text>
                </th>
              </tr>
              <tr>
                <th>#</th>
                <th>Nomor</th>
                <th>Bet</th>
                <th>Diskon</th>
                <th>Kei</th>
                <th>Bayar:</th>
              </tr>
            </thead>
            <tbody>
              {bets.map((bet, index) => (
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
                      value={bet.fee
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
            <tfoot></tfoot>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default Xd
