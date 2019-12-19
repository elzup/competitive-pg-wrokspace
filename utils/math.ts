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

const _productRange = (a: number, b: number) => {
  let prd = a
  let i = a

  while (i++ < b) {
    prd = i * prd
  }
  return prd
}

// combination 組み合わせ
const _combinations = (n: number, r: number) => {
  if (n == r) return 1

  r = r < n - r ? n - r : r
  return _productRange(r + 1, n) / _productRange(1, n - r)
}

const _mod = 10 ** 9 + 7
// パスカルの三角形
const _pascalTriangle = (n: number) => {
  let a: number[] = [0, 1, 0]

  for (let i = 1; i <= n + 1; i++) {
    const b: number[] = [0]

    for (let j = 0; j < a.length - 1; j++) {
      b.push((a[j] + a[j + 1]) % _mod)
    }
    b.push(0)
    a = b
  }
  return a
}

// 逆元 combination nCr 組み合わせ fset, fac, finv 必要

const fac: number[] = []
const finv: number[] = []
const _mul = (...a) =>
  a.reduce(
    (r, c) => ((((r >> 16) * c) % _mod) * 65536 + (r & 65535) * c) % _mod,
    1
  )
const _inv = b => {
  for (var a = _mod, u = 0, v = 1, t; b; v = t)
    (t = (a / b) | 0),
      (a -= t * b),
      (u -= t * v),
      (t = a),
      (a = b),
      (b = t),
      (t = u),
      (u = v)
  u %= _mod
  return u < 0 ? u + _mod : u
}
const _fset = (n: number) => {
  fac.length = n + 1
  fac[0] = fac[1] = 1
  for (let i = 2; i <= n; ) {
    fac[i] = _mul(fac[i - 1], i++)
  }
  finv.length = n + 1
  finv[0] = finv[1] = 1
  finv[n] = _inv(fac[n])
  for (let i = n; 2 < i; ) {
    finv[i - 1] = _mul(finv[i], i--)
  }
}
const _ncr = (n, r) => _mul(fac[n], finv[r], finv[n - r])
