import React from "react"
import Game from "src/components/games/freepick"

const Play = () => {
  const markets = {
    0: {
      name: "Indonesia",
      games: {
        free: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
      },
    },
    1: {
      name: "China",
      games: {
        free: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
      },
    },
    2: {
      name: "Texas",
      games: {
        free: {
          game_id: 234,
          discount: 10,
          fee: 0,
        },
      },
    },
    3: {
      name: "Mexico Mega",
      games: {
        free: {
          game_id: 234,
          discount: 5,
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
