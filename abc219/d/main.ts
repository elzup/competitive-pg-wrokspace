// import std = require('tstl')

type Print = void | string | number | string[] | number[]
let outs: Print[] = []

const main = (): Print => {
  const r = _io()
  const [N] = r.nn()
  const [X, Y] = r.nn()
  const ab = [...r.nnls()]

  let dpa: Record<number, [number, number]> = {}
  let dpb: Record<number, [number, number]> = []
  // dpa[n] = [ASUM, BSUM]
  // dpb[n] = [ASUM, BSUM]

  dpa[0] = [0, 0]
  ab.sort((w, v) => {
    const bd = v[1] - w[1]

    if (bd === 0) return v[0] - w[0]
    return bd
  })
  // console.log(ab)

  // console.log(ab)
  // console.log(ab[0])
  for (const [a, b] of ab) {
    // ab.forEach(([a, b]) => {
    for (const [i, [asum0, bsum0]] of Object.entries(dpa)) {
      if (asum0 >= X) continue
      const asum = asum0 + a
      const bsum = bsum0 + b

      if (dpa[Number(i) + 1]) {
        const [as2, _bs2] = dpa[Number(i) + 1]

        if (bsum >= Y && as2 < asum) {
          dpa[Number(i) + 1] = [asum, bsum]
        }
      } else {
        dpa[Number(i) + 1] = [asum, bsum]
      }
    }
  }
  dpb[0] = [0, 0]
  ab.sort((w, v) => {
    const bd = v[1] - w[1]

    if (bd === 0) return v[0] - w[0]
    return bd
  })
  // console.log(ab)

  // console.log(ab)
  // console.log(ab[0])
  for (const [a, b] of ab) {
    // ab.forEach(([a, b]) => {
    for (const [i, [asum0, bsum0]] of Object.entries(dpb)) {
      if (asum0 >= X) continue
      const asum = asum0 + a
      const bsum = bsum0 + b

      if (dpb[Number(i) + 1]) {
        const [as2, _bs2] = dpb[Number(i) + 1]

        if (bsum >= Y && as2 < asum) {
          dpb[Number(i) + 1] = [asum, bsum]
        }
      } else {
        dpb[Number(i) + 1] = [asum, bsum]
      }
    }
  }

  let ans = -1

  // for (let i = 0; i < Object.entries(dpa).length; i++) {
  // 	const [i, [asum0, bsum0]] = dpa[i]
  for (const [i, [asum0, bsum0]] of Object.entries(dpa)) {
    const check =
      (asum0 >= X && bsum0 >= Y) || (dpb[i][0] >= X && dpb[i][1] >= Y)

    if (check) {
      ans = Number(i)
      break
    }
  }
  return ans
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

export default null
