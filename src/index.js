export const HAND = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
}

export const RESULT = {
  WIN: 0,
  LOSE: 1,
  DRAW: 2
}

const WEB2_MAN_NUM = 11

export const makePlayer = hand => {
  assert(hand >= 0 && hand < 3, "player hands problem...")
  return { hand }
}

const makeComputers = n => {
  const players = []
  for (let i = 0; i < n; i++) {
    players.push(makePlayer(Math.floor(Math.random() * 3)))
  }
  return players
}

// rps single logic
export const rpsLogic = (h1, h2) => {
  return (h1 + h2 * -1 + 2) % 3
}
/**
 *
 * @param  {{hand:string, id:int}[]} players
 */
export const game = players => {
  const pHands = [...new Set(players.map(p => p.hand))]
  if (pHands.length !== 2) return { draw: true }

  const winnedHand = hands => {
    return rpsLogic(hands[0], hands[1]) ? hands[1] : hands[0]
  }

  return {
    winners: players.filter(p => p.hand === winnedHand(pHands))
  }
}

export const rpsSimulation = players =>
  players.map(p => game([p, ...makeComputers(WEB2_MAN_NUM - 1)]))

export const dailyQueue = makeComputers

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed")
  }
}
