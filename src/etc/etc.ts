export const 분수의덧셈 = (number1: number, denom1: number, number2: number, denom2: number) => {
  const denom = denom1 * denom2
  number1 = (number1 * denom) / denom1
  number2 = (number2 * denom) / denom2

  const number = number1 + number2

  const recursive = (num: number, denom: number) => {
    if (num % 2 === 0 && denom % 2 === 0) {
      return recursive(num / 2, denom / 2)
    } else {
      return [num, denom]
    }
  }

  return recursive(number, denom)
}

export const 유클리드호제법 = (n: number, m: number) => {
  const gcd = (a: number, b: number) => {
    if (b === 0) return a // 나누어지면 a 리턴
    return gcd(b, a % b) // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  }
  const lcm = (a: number, b: number) => (a * b) / gcd(a, b) // 두 수의 곱을 최대공약수로 나눈다.
  return [gcd(n, m), lcm(n, m)]
}
