{
  const main = (input: string) => {
    const r = reader(input)
    const [X, Y] = r.ns()

    // X + Y === 3 * n - 1
    if ((X + Y) % 3 !== 0) {
      console.log(0)
      return
    }
    const n = (X + Y) / 3
    const rot = Math.min(X, Y) - n + 1

    // console.log({ n, rot })

    if (rot < 0) {
      console.log(0)
      return
    }
    _fset(n)

    const res = _ncr(n, rot - 1)

    console.log(res)
  }

  const _mod = 10 ** 9 + 7
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
