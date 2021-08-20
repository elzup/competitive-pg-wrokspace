// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()

    const s = r.s()
    // const hasR = s.split('').some((c) => c === 'R')
    // const hasW = s.split('').some((c) => c === 'W')

    // if (!hasR || !hasW) {
    //   return 0
    // }

    let si = 0
    let ei = N - 1
    let res = 0

    while (si < ei) {
      while (s[si] === 'R') si++
      while (s[ei] === 'W') ei--
      if (si > ei) break

      si++
      ei--
      res++
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
