import { describe, expect, it } from 'vitest'

import { atm, calculateSugar, coinChange, coinFunction, meetingRoom, movingStuff } from './greedy'

describe('Greedy Test', async () => {
  it('짐나르기(backpack Problem)', async () => {
    const stuff = [35, 8, 10, 99, 67]

    const result = movingStuff(stuff, 100)

    expect(result).toBe(3)
  })

  it('편의점 알바(Coin Change Problem)', async () => {
    const remainMoney = 400

    const result = coinChange(remainMoney)

    expect(result).toBe(4)
  })

  it('설탕 배달', async () => {
    const sugar = 23

    const result = calculateSugar(sugar)

    expect(result).toBe(5)
  })

  it('ATM', async () => {
    const times = [3, 2, 4]

    const result = atm(times)

    expect(result).toBe(16)
  })

  it('Coin Function', async () => {
    const result = coinFunction(10, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000], 4790)

    expect(result).toBe(12)
  })

  it('회의실 배정', async () => {
    const i = [
      [1, 4],
      [3, 5],
      [0, 6],
      [5, 7],
      [3, 8],
      [5, 9],
      [6, 10],
      [8, 11],
      [8, 12],
      [2, 13],
      [12, 14],
    ]

    const result = meetingRoom(11, i)

    expect(result).toBe(4)
  })
})
