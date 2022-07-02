// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N] = r.nn()
  const a = r.nnls()

  let res = ''

  const d = [-1, 0, 1]

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      d.forEach((v) => {
        d.forEach((h) => {
          if (v === 0 && h === 0) return
          let t = ''

          for (let k = 0; k < N; k++) {
            t += a[(i + v * k + N) % N][(j + h * k + N) % N]
          }
          if (res < t) {
            res = t
          }
        })
      })
    }
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
  const nnls = () => lines.slice(i)

  return { lines, s, n, ss, nn, nls, nnls }
}

outs.push(main())

console.log(
  outs
    .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
    .join('\n')
)

export default {}
