// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [_N, K] = r.nn()
    const P = r.nn()
    const C = r.nn()

    let res = Number.MIN_SAFE_INTEGER

    P.forEach((p) => {
      let max = Number.MIN_SAFE_INTEGER
      let pi = p

      let point = 0
      let t = 0

      // console.log(p)

      do {
        pi = P[pi - 1]
        t++
        point += C[P[pi - 1] - 1]
        max = Math.max(point, max)
        // console.log(`loop1: ${pi} ${point}`)
      } while (p !== pi && t < K)
      if (point <= 0 || t >= K) {
        res = Math.max(max, res)
        return
      }
      const lt = t
      const lc = Math.floor((K - t) / lt)

      point *= lc + 1
      t += lc * lt
      res = Math.max(point, res)
      while (t < K) {
        pi = P[pi - 1]
        point += C[P[pi - 1] - 1]
        t++
        max = Math.max(point, max)
        // console.log(`loop2: ${pi} ${point}`)
      }
      res = Math.max(max, res)
    })
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
