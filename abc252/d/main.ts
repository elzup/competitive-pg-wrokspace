// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()
    const A = r.nn()

    const t: Record<number, number> = {}
    const c: Record<number, number> = {}

    A.forEach((i) => {
      t[i] = (t[i] || 0) + 1
    })
    let sum = 0

    const MAX = 2 * 10 ** 5 + 1

    c[-1] = 0
    for (let i = 0; i < MAX; i++) {
      c[i] = c[i - 1] + t[i] || 0
    }

    Object.entries(t).forEach(([k, v]) => {
      // console.log(k, v)
      const d = c[Number(k) - 1]

      // console.log(d)
      const u = N - c[k]

      sum += d * u * v
    })

    // const l = Object.keys(t).length
    return sum
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

  outs.push(main())

  console.log(
    outs
      .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}
