// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N] = r.nn()
  const [A, B] = r.nn()

  return A + B + N
}

const _io = (i = 0) => {
  const str = require('fs').readFileSync('/dev/stdin', 'utf8')
  const lines = str.trim().split('\n')
  const s = () => lines[i++] || ''
  const n = () => Number(s())

  const mn = (v: string[]) => v.map(Number)
  const sp = (v: string) => v.split(' ')

  const ss = () => sp(s())
  const nn = () => mn(ss())
  const ls = () => lines.slice(i)
  const nls = () => mn(ls())
  const nnls = () => ls().map((v) => mn(sp(v)))

  return { lines, s, n, ss, nn, ls, nls, nnls }
}

outs.push(main())

console.log(
  outs
    .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
    .join('\n')
)

export default {}
