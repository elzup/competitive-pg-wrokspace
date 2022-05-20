// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N, _Q] = r.nn()
  const xs = r.nls()

  const pos: { [key: number]: number } = {}
  const by: { [key: number]: number } = {}

  for (let i = 1; i <= N; i++) {
    by[i] = i
    pos[i] = i
  }

  xs.forEach((x) => {
    let xi = by[x]

    if (xi === N) xi -= 1

    const k1 = xi
    const k2 = xi + 1
    const v1 = pos[k1]
    const v2 = pos[k2]

    pos[k1] = v2
    pos[k2] = v1
    by[v1] = k2
    by[v2] = k1
  })
  return [...Array(N).keys()].map((i) => pos[i + 1])
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
