// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N] = r.nn()

  const chars = r.ls()

  // console.log({ chars })

  let min: null | number = null

  for (let i = 0; i < 10; i++) {
    const t = check(chars, `${i}`, N)

    // console.log(i, t)

    min = min === null ? t : Math.min(t, min)
  }

  return min || 0
}

function check(chars: string[], k: string, N: number) {
  const d: { [i: number]: boolean } = {}

  let t = 0
  let cmp = 0

  while (true) {
    for (let i = 0; i < N; i++) {
      if (d[i]) continue
      if (chars[i][t % 10] === k) {
        cmp++
        d[i] = true
        break
      }
    }
    if (cmp === N) break
    t++
  }
  return t
}

const _io = (i = 0) => {
  const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
  const lines = str.trim().split('\n')
  const s = () => lines[i++] || ''
  const n = () => Number(s())

  const mn = (v: string[]) => v.map(Number)
  const sp = (v: string) => v.split('')

  const ss = () => sp(s())
  const nn = () => mn(ss())
  const nls = () => mn(lines.slice(i))
  const ls = () => lines.slice(i)

  return { lines, s, n, ss, nn, nls, ls }
}

outs.push(main())

console.log(
  outs
    .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
    .join('\n')
)

export default {}
