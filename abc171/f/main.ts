// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []
  /*

  **o**of*
  *o*of***
  o**of**f
  
  */

  const main = (): Print => {
    const r = _io()
    const [K] = r.nn()
    const S = r.s()

    const sl = S.length
    const l = sl + K

    fset(l)
    let res = 0
    let cache25 = 1

    // ###*****
    for (let i = 0; i <= K; i++) {
      let n1 = mul(ncr(l, i), cache25) % mod

      res = (res + n1) % mod
      cache25 = (cache25 * 25) % mod
    }

    return res
  }

  const _io = (i = 0) => {
    const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')

    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }
  const fac: number[] = []
  const finv: number[] = []
  const mod = 10 ** 9 + 7
  const mul = (...a): number =>
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
  const ncr = (n: number, r: number) => mul(fac[n], finv[r], finv[n - r])

  outs.push(main())

  console.log(
    outs
      .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}
