// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N, X] = r.nn()
  const AB = r.nnls()

  console.log(AB)

  const ABS: number[] = []

  for (let i = 0; i < N; i++) {
    ABS.push(AB[i][0] + AB[i][1])
  }

  const sum = [ABS[0]]

  for (let i = 1; i < N; i++) {
    sum.push(sum[i - 1] + ABS[i])
  }

  let ans = Infinity

  for (let i = 0; i < N; i++) {
    const r = X - i - 1

    if (r <= 0) continue
    const t = sum[i] + AB[i][1] * r

    ans = Math.min(ans, t)
  }

  return ans
}

const _io = (i = 0) => {
  const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
  const lines = str.trim().split('\n')
  const s = () => lines[i++] || ''
  const n = () => parseInt(s())

  const mn = (v: string[]) => v.map(parseInt)
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
