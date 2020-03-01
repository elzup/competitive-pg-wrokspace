// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N, M] = r.nn()
    const A = r.nnls()

    const lib: Record<number, number> = {}

    for (let i = 0; i < M; i++) {
      const [s, c] = A[i]

      // if (lib[s] !== undefined && lib[s] !== c) return -1
      if (s in lib && lib[s] !== c) return -1
      if (s === 1 && c === 0 && N >= 2) return -1
      lib[s] = c
    }

    if (lib[1] === undefined) {
      lib[1] = N === 1 ? 0 : 1
    }

    let res = ''

    for (let i = 1; i <= N; i++) {
      res += String(lib[i] || 0)
    }

    return res
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
    const nnls = () => lines.slice(i).map(v => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  outs.push(main())

  console.log(
    outs
      .map(line => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}
