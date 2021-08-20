// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [_N, K] = r.nn()
    const A = r.nn()

    const al = A.map(Math.log2)

    let lo = 0
    let hi = Math.log2(10 ** 9)
    let mid = 0

    // console.log(al)

    while (hi > lo) {
      mid = (hi + lo) / 2

      let sumK = 0

      al.forEach((ai) => {
        if (mid <= ai) {
          sumK += Math.ceil(ai - mid)
        }
      })
      // console.log(mid)
      // console.log(sumK)

      if (sumK === K && hi - lo < 0.001) {
        break
      }
      if (sumK > K) {
        lo = mid
      } else {
        hi = mid
      }
    }
    // console.log(mid)

    return Math.ceil(Math.pow(2, mid) - 0.00001)
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
}
