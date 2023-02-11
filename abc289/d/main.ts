// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [_N] = r.nn()
  const a = r.nn()
  const [_M] = r.nn()
  const bs = r.nn()

  const b = bs.reduce((k, i) => ({ ...k, [i]: true }), {})
  const [X] = r.nn()

  const e = {}

  e[0] = true

  const t = [0]

  for (let i = 0; t.length < X && !e[X]; i++) {
    const p = t[i]

    if (!e[p]) continue
    if (b[p]) continue
    a.every((v) => {
      if (b[p + v]) return true
      if (e[p + v]) return true
      t.push(p + v)
      e[p + v] = true
      return p + v < X
    })
    // console.log(e)
  }

  return e[X] ? 'Yes' : 'No'
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

export default {}
