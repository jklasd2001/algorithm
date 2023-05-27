import { describe, expect, it } from 'vitest'

import { 분수의덧셈, 유클리드호제법 } from './etc'

describe('ETC', async () => {
  it('분수의덧셈', async () => {
    // const result = 분수의덧셈(1, 2, 3, 4)
    const result = 분수의덧셈(9, 2, 1, 3)

    expect(result).toStrictEqual([29, 6])
  })

  it('유클리드호제법', async () => {
    const result = 유클리드호제법(9, 2)

    console.log(result)
  })
})
