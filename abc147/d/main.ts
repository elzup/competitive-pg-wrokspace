{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const a = r.ns()

    const _mod = 10 ** 9 + 7

    let res = 0
    const cnt = Array(60)

    cnt.fill(0)

    a.forEach(n => {
      for (let i = 0; i < 60; i++) {
        cnt[i] += (n >> i) & 1
      }
    })
    cnt.forEach(i => {
      res += cnt[i] * (N - cnt[i]) * powmod(2, i, _mod)
      res %= _mod
    })

    console.log(res % _mod)
  }

  const powmod = (base, exp, mod) => {
    if (exp == 0) {
      return 1
    }
    if (exp % 2 == 0) {
      return Math.pow(powmod(base, exp / 2, mod), 2) % mod
    } else {
      return (base * powmod(base, exp - 1, mod)) % mod
    }
  }

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
