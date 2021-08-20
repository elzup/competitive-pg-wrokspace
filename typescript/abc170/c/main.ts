// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [X, N] = r.nn()

    if (N === 0) return X
    const p = r.nn()

    const lib = {}

    p.forEach((pv) => {
      lib[pv] = true
    })
    if (!lib[X]) return X
    for (let i = 1; i < 1000; i++) {
      if (!lib[X - i]) return X - i
      if (!lib[X + i]) return X + i
    }

    return -1
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
