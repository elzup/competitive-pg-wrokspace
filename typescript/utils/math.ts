/* eslint-disable @typescript-eslint/no-unused-vars */
// 素因数分解 prime
const primeFactorization = (n: number) => {
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

const powMod = (x: number, y: number) =>
  Array.from({ length: y }).reduce((p: number) => (p * x) % mod, 1)

const lcmDiv = (a: number[]) => {
  // 集合の積を求める
  const nums = primeFactorization(a[0]).groups

  for (let i = 1; i < a.length; i++) {
    const { groups } = primeFactorization(a[i])
    // { a: 1, b: 1}
    // { b: 2, c: 2}
    // => { b: 1 } 最大公約数
    // => { a: 1, b: 2, c: 2 } 最小公倍数

    Object.keys(groups).forEach((k) => {
      nums[k] = Math.max(groups[k], nums[k] || 0)
    })
  }
  return nums
}

// 約数 一覧 prime
const divisors = (n: number) => {
  const sq = Math.floor(Math.sqrt(n))
  const list: number[] = []
  const pairs: [number, number][] = []

  for (let i = sq; i > 0; i--) {
    if (n % i !== 0) continue
    list.unshift(i)
    if (sq * sq !== n) list.push(n / i)
    pairs.unshift([i, n / i])
  }
  return { list, pairs }
}

// 最大公約数
const gcd = (a, b) => (b ? gcd(b, a % b) : a)

// 最小公倍数
const lcm = (a, b) => (a * b) / gcd(a, b)

const productRange = (a: number, b: number) => {
  let prd = a
  let i = a

  while (i++ < b) {
    prd = i * prd
  }
  return prd
}

// combination 組み合わせ
const combinations = (n: number, r: number) => {
  if (n === r) return 1

  r = r < n - r ? n - r : r
  return productRange(r + 1, n) / productRange(1, n - r)
}

const mod = 10 ** 9 + 7
// パスカルの三角形
const pascalTriangle = (n: number) => {
  let a: number[] = [0, 1, 0]

  for (let i = 1; i <= n + 1; i++) {
    const b: number[] = [0]

    for (let j = 0; j < a.length - 1; j++) {
      b.push((a[j] + a[j + 1]) % mod)
    }
    b.push(0)
    a = b
  }
  return a
}

// 逆元 combination nCr 組み合わせ fset, fac, finv 必要

const fac: number[] = []
const finv: number[] = []
const mul = (...a) =>
  a.reduce(
    (r, c) => ((((r >> 16) * c) % mod) * 65536 + (r & 65535) * c) % mod,
    1
  )
const inv = (b) => {
  for (var a = mod, u = 0, v = 1, t; b; v = t)
    (t = (a / b) | 0),
      (a -= t * b),
      (u -= t * v),
      (t = a),
      (a = b),
      (b = t),
      (t = u),
      (u = v)
  u %= mod
  return u < 0 ? u + mod : u
}
const fset = (n: number) => {
  fac.length = n + 1
  fac[0] = fac[1] = 1
  for (let i = 2; i <= n; ) {
    fac[i] = mul(fac[i - 1], i++)
  }
  finv.length = n + 1
  finv[0] = finv[1] = 1
  finv[n] = inv(fac[n])
  for (let i = n; 2 < i; ) {
    finv[i - 1] = mul(finv[i], i--)
  }
}
const ncr = (n, r) => mul(fac[n], finv[r], finv[n - r])

const generatePermutation = (perm, pre, post, n) => {
  let elem, i, rest, len

  if (n > 0)
    for (i = 0, len = post.length; i < len; ++i) {
      rest = post.slice(0)
      elem = rest.splice(i, 1)
      generatePermutation(perm, pre.concat(elem), rest, n - 1)
    }
  else perm.push(pre)
}
