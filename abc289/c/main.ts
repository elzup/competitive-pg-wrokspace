// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N, M] = r.nn()

  const c: number[] = []

  for (let i = 0; i < M; i++) {
    r.nn()
    const a = r.nn()

    c.push(a.map((ai) => 1 << (ai - 1)).reduce((a, b) => a + b))
  }

  // console.log(c.map((i) => i.toString(2)))
  let count = 0

  const full = 2 ** N - 1

  const bits = [...Array(M).keys()]

  for (let i = 1; i <= 2 ** M; i++) {
    // console.log()
    // console.log(i.toString(2))
    // console.log(bits.map((b) => ((i >> b) & 1 ? c[b] : 0)))

    const t = bits.map((b) => ((i >> b) & 1 ? c[b] : 0)).reduce((a, b) => a | b)

    // console.log(t.toString(2))

    if (t === full) {
      count++
    }
  }
  return count
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
