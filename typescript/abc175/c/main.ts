// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [X, K, D] = r.nn()
    const xp = Math.abs(X)

    const plusMin = xp % D
    const minusMin = Math.abs((xp % D) - D)
    const steps = (xp - plusMin) / D

    const t = xp - K * D

    if (t >= 0) {
      return t
    }
    // console.log(sueps)
    // console.log(steps % 2)

    return Math.abs([plusMin, minusMin][(K - steps) % 2])
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
