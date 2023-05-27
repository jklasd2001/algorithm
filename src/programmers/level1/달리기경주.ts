export const 달리기경주 = (players: string[], callings: string[]) => {
  for (const calling of callings) {
    const index = players.findIndex((player) => player === calling)

    const temp = players[index]
    players[index] = players[index - 1]
    players[index - 1] = temp
  }

  return players
}
