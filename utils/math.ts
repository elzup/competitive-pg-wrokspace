// 素因数分解 prime
function _primeFactorization(n: number) {
  const sq = Math.floor(Math.sqrt(n))
  const groups: { num: number; r: number }[] = []
  const list: number[] = []

  for (let i = 2; i <= sq; i++) {
    if (n % i !== 0) {
      continue
    }
    let r = 0

    do {
      r++
      n /= i
      list.push(i)
    } while (n % i === 0)

    groups.push({ num: i, r })
  }

  if (n > sq) {
    list.push(n)
    groups.push({ num: n, r: 1 })
  }

  return { list, groups }
}

// 公約数 一覧 prime
const _divisors = (n: number) => {
  const sq = Math.floor(Math.sqrt(n))
  const list: number[] = []
  const pairs: [number, number][] = []

  for (let i = sq; i > 0; i--) {
    if (n % i !== 0) {
      continue
    }
    list.unshift(i)
    if (sq * sq !== n) {
      list.push(n / i)
    }
    pairs.unshift([i, n / i])
  }
  return { list, pairs }
}
