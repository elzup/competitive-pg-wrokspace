// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [_N] = r.nn()
  const sps = r
    .ls()
    .map((v) => v.split(' '))
    .map(([s, p], i) => [s, Number(p), i + 1] as const)

  sps.sort(([as, ap], [bs, bp]) => {
    const ds = as.localeCompare(bs)

    return ds === 0 ? bp - ap : ds
  })
  // console.log(sps)

  return sps.map(([, , i]) => String(i)).join('\n')
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
  const ls = () => lines.slice(i)
  const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

  return { lines, s, n, ss, nn, nls, nnls, ls }
}

outs.push(main())

console.log(
  outs
    .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
    .join('\n')
)

export default {}
