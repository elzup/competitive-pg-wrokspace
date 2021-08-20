// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N, D] = r.nn()

    let c = 0

    for (let i = 0; i < N; i++) {
      const [X, Y] = r.nn()

      if (X ** 2 + Y ** 2 <= D ** 2) {
        c++
      }
    }

    return c
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
