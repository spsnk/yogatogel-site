import React from "react"
import Game from "src/components/games/xd"

const Play = () => {
  const markets = {
    0: {
      name: "Indonesia",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 0,
        },
        d2: {
          game_id: 3213,
          discount: 5,
          fee: 0,
        },
      },
    },
    1: {
      name: "China",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 0,
        },
        d2: {
          game_id: 3213,
          discount: 5,
          fee: 0,
        },
      },
    },
    2: {
      name: "Texas",
      games: {
        d4: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
        d3: {
          game_id: 2138,
          discount: 20,
          fee: 0,
        },
        d2: {
          game_id: 3213,
          discount: 5,
          fee: 0,
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
  return (
    <>
      <Game markets={markets} />
    </>
  )
}

export default Play
