import {
  faExpandArrowsAlt,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Form, Table } from "react-bootstrap"

const Xd = () => {
  const markets = {
    0: {
      name: "Indonesia",
      discount: 58,
      fee: 3,
    },
    1: {
      name: "China",
      discount: 10,
      fee: 5,
    },
    2: {
      name: "Texas",
      discount: 36,
      fee: 0,
    },
    3: {
      name: "Mexico Mega",
      discount: 89,
      fee: 1,
    },
  }
  const default_bet = {
    market: -1,
    number: false,
    fourd: false,
    threed: false,
    twod: false,
    discount: 0,
    total: 0,
    fee: 0,
    totalS: 0,
    bb: false,
  }
  const [bets, setBets] = useState([{ ...default_bet }])

  const [auto, setAuto] = useState({
    auto4d: false,
    auto3d: false,
    auto2d: false,
  })
  const manageAuto = e => {
    let game = e.target.dataset.game
    setAuto({ ...auto, [game]: !auto[game] })
  }

  const [theTotal, setTheTotal] = useState(0)

  const addBet = () => {
    let bet = { ...default_bet }
    if (bets.length > 1) {
      bet.fourd = auto.auto4d ? bets[bets.length - 1].fourd : false
      bet.threed = auto.auto3d ? bets[bets.length - 1].threed : false
      bet.twod = auto.auto2d ? bets[bets.length - 1].twod : false
      bet.market =
        auto.auto4d || auto.auto3d || auto.auto2d
          ? bets[bets.length - 1].market
          : -1
    }
    setBets([...bets, bet])
  }
  const delBet = index => {
    if (bets.length > 1) {
      let items = Array.from(bets)
      if (index > -1) {
        items.splice(index, 1)
        setBets(items)
      }
    }
  }
  const updateBet = e => {
    let data = e.target.dataset
    let value = e.target.value
    let id = data.bet
    let field = data.field
    let items = Array.from(bets)
    let item = items[id]
    if (field === "number" && value && value.length > 4) {
      item.number = value.slice(0, 4)
    } else {
      item[field] = value
    }
    let fod =
      isNaN(parseInt(item.fourd)) || !item.number || item.number.length < 4
        ? 0
        : parseInt(item.fourd)
    let thd =
      isNaN(parseInt(item.threed)) || !item.number || item.number.length < 3
        ? 0
        : parseInt(item.threed)
    let twd =
      isNaN(parseInt(item.twod)) || !item.number || item.number.length < 2
        ? 0
        : parseInt(item.twod)

    let pretotal = fod * 1000 + thd * 1000 + twd * 1000
    let discount_percent = 0
    let fee_percent = 0
    if (item.market !== -1) {
      discount_percent = markets[item.market].discount
      fee_percent = markets[item.market].fee
    }

    let discount = Math.round(pretotal * (discount_percent / 100))
    let fee = pretotal * (fee_percent / 100)
    let total = pretotal - discount + fee

    item.discount = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    item.fee = fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    item.total = total
    item.totalS = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    items[id] = item
    setTheTotal(
      items
        .map(it => it.total)
        .reduce((prev, curr) => prev + curr)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    )
    setBets(items)
  }

  const table_info = () => (
    <tr>
      <th>No.</th>
      <th>Market</th>
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
      <th>Discount</th>
      <th>Kei</th>
      <th>
        <Form.Text>
          Total: <strong>{theTotal}</strong>
        </Form.Text>
        Bayar:
      </th>
      <th>BB</th>
      <th>
        <Button style={{ width: "auto" }} title="Add Bet" onClick={addBet}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </th>
    </tr>
  )

  return (
    <>
      <Form inline>
        <Table striped hover className="betTable" size="sm">
          <thead>{table_info()}</thead>
          <tbody>
            {bets.map((bet, index) => (
              <tr key={`bet-${index}`}>
                <td>
                  <Form.Control
                    plaintext={true}
                    readOnly={true}
                    value={`${index + 1}.`}
                    style={{ width: "2rem" }}
                  />
                </td>
                <td>
                  <Form.Control
                    as="select"
                    custom
                    className="form-control"
                    data-field="market"
                    data-bet={index}
                    value={bet.market}
                    onChange={updateBet}
                  >
                    <option disabled value={-1}>
                      Market
                    </option>
                    {Object.keys(markets).map(k => (
                      <option key={k} value={k}>
                        {markets[k].name}
                      </option>
                    ))}
                  </Form.Control>
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
                    style={{ width: "4.2rem" }}
                  />
                </td>
                <td>
                  <Form.Control
                    placeholder="4D"
                    min={0}
                    type="number"
                    disabled={!bet.number || bet.number.length < 4}
                    value={bet.fourd}
                    data-field="fourd"
                    data-bet={index}
                    onChange={updateBet}
                    style={{ width: "8rem" }}
                  />
                </td>
                <td>
                  <Form.Control
                    placeholder="3D"
                    min={0}
                    type="number"
                    disabled={!bet.number || bet.number.length < 3}
                    value={bet.threed}
                    data-field="threed"
                    data-bet={index}
                    onChange={updateBet}
                    style={{ width: "8rem" }}
                  />
                </td>
                <td>
                  <Form.Control
                    placeholder="2D"
                    min={0}
                    type="number"
                    disabled={!bet.number || bet.number.length < 2}
                    value={bet.twod}
                    data-field="twod"
                    data-bet={index}
                    onChange={updateBet}
                    style={{ width: "8rem" }}
                  />
                </td>
                <td>
                  <Form.Control
                    plaintext={true}
                    readOnly={true}
                    value={bet.discount}
                  />
                </td>
                <td>
                  <Form.Control
                    plaintext={true}
                    readOnly={true}
                    value={bet.fee}
                  />
                </td>
                <td>
                  <Form.Control
                    plaintext={true}
                    readOnly={true}
                    value={bet.totalS}
                  />
                </td>
                <td>
                  <Button variant="warning" style={{ width: "auto" }}>
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                  </Button>
                </td>
                <td>
                  <Button
                    style={{ width: "auto" }}
                    data-bet={index}
                    variant="danger"
                    onClick={() => delBet(index)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>{table_info()}</tfoot>
        </Table>
      </Form>
    </>
  )
}

export default Xd
