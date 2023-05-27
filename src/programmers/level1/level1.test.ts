import { describe, expect, it } from 'vitest'

import { 달리기경주 } from './달리기경주'
import { 추억점수 } from './추억점수'

describe('Level1', async () => {
  it('달리기경주', async () => {
    const players = ['mumu', 'soe', 'poe', 'kai', 'mine']
    const callings = ['kai', 'kai', 'mine', 'mine']
    const result = ['mumu', 'kai', 'mine', 'soe', 'poe']

    expect(달리기경주(players, callings)).toStrictEqual(result)
  })

  it('추억점수', async () => {
    const name = ['may', 'kein', 'kain', 'radi']
    const yearning = [5, 10, 1, 3]
    const photo = [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
    const result = [19, 15, 6]

    expect(추억점수(name, yearning, photo)).toStrictEqual(result)
  })
})
