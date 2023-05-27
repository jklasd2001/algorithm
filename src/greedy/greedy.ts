/**
 * 짐나르기(backpack Problem)
 * 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다.
 * 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.
 * 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.
 * 박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.
 * 짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.
 */
export const movingStuff = (stuff: number[], limit: number) => {
  let count = 0
  const sortedStuff = stuff.sort((a, b) => a - b) // 오름차순 정렬

  while (sortedStuff.length !== 0) {
    if (sortedStuff[0] + sortedStuff[sortedStuff.length - 1] <= limit) {
      count++
      sortedStuff.shift()
      sortedStuff.pop()
    } else {
      count++
      sortedStuff.pop()
    }
  }

  return count
}

/**
 * 편의점 알바(Coin Change Problem)
 * 편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다.
 * 현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다.
 * 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는 함수를 작성해 주세요.
 */
export const coinChange = (remainMoney: number) => {
  let count = 0
  const coins = [500, 100, 50, 10, 5, 1]

  for (const coin of coins) {
    count += Math.floor(remainMoney / coin)
    remainMoney -= coin * Math.floor(remainMoney / coin)
  }
  return count
}

/**
 * 설탕 배달
 * 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다.
 * 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.
 * 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
 * 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때,
 * 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
 * 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
 */
export const calculateSugar = (sugar: number) => {
  let count = 0
  const arrs = [5, 3]

  for (const arr of arrs) {
    count += Math.floor(sugar / arr)
    sugar -= arr * Math.floor(sugar / arr)
  }

  return count
}

/**
 * ATM
 * 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다.
 * 사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다.
 * 사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다.
 * 예를 들어, 총 5명이 있고, P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 = 2 인 경우를 생각해보자.
 * [1, 2, 3, 4, 5] 순서로 줄을 선다면, 1번 사람은 3분만에 돈을 뽑을 수 있다.
 * 2번 사람은 1번 사람이 돈을 뽑을 때 까지 기다려야 하기 때문에, 3+1 = 4분이 걸리게 된다.
 * 3번 사람은 1번, 2번 사람이 돈을 뽑을 때까지 기다려야 하기 때문에, 총 3+1+4 = 8분이 필요하게 된다.
 * 4번 사람은 3+1+4+3 = 11분, 5번 사람은 3+1+4+3+2 = 13분이 걸리게 된다.
 * 이 경우에 각 사람이 돈을 인출하는데 필요한 시간의 합은 3+4+8+11+13 = 39분이 된다.
 * 줄을 [2, 5, 1, 4, 3] 순서로 줄을 서면, 2번 사람은 1분만에,
 * 5번 사람은 1+2 = 3분, 1번 사람은 1+2+3 = 6분, 4번 사람은 1+2+3+3 = 9분, 3번 사람은 1+2+3+3+4 = 13분이 걸리게 된다.
 * 각 사람이 돈을 인출하는데 필요한 시간의 합은 1+3+6+9+13 = 32분이다.
 * 이 방법보다 더 필요한 시간의 합을 최소로 만들 수는 없다.
 * 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때,
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.
 */
export const atm = (times: number[]) => {
  const sortedTimes = times.sort((a, b) => a - b)

  let sum = 0
  let prev = 0

  for (const time of sortedTimes) {
    sum = sum + prev + time
    prev = prev + time
  }

  return sum
}

/**
 * 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
 */
export const coinFunction = (coins: number, price: number[], total: number) => {
  let count = 0
  const sortedPrice = price.sort((a, b) => b - a)

  for (let i = 0; i < coins; i++) {
    count = count + Math.floor(total / sortedPrice[i])
    total = total - sortedPrice[i] * Math.floor(total / sortedPrice[i])
  }

  return count
}

/**
 * 백준 1931번 문제
 * 회의실 배정
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다.
 * 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고,
 * 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자.
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * 회의의 시작시간과 끝나는 시간이 같을 수도 있다.
 * 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.
 */
export const meetingRoom = (meetingCount: number, meetingTimes: number[][]) => {
  let count = 0
  let endTime = 0

  const sortedMeetings = meetingTimes.sort((a, b) => a[1] - b[1])

  for (let i = 0; i < meetingCount; i++) {
    if (sortedMeetings[i][0] >= endTime) {
      count++
      endTime = sortedMeetings[i][1]
    }
  }

  return count
}
