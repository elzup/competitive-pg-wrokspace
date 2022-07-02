// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N, Q] = r.nn()
  const S = r.s()
  const qs = r.nnls()

  let pi = 0
  const res: string[] = []

  qs.forEach(([t, x]) => {
    if (t === 1) {
      pi += x
    } else {
      res.push(S[(S.length - (pi % S.length) + (x - 1)) % S.length])
    }
  })
  return res.join('\n')
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
