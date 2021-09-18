// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  function replace(s: string, lib: Record<string, string>): string {
    return s
      .split('')
      .map((c) => lib[c])
      .join('')
  }

  const main = (): Print => {
    const r = _io()
    const [X] = r.ss()
    const [N] = r.nn()
    const s = [...Array(N)].map(() => r.s())

    const lib: Record<string, string> = {}
    const revLib: Record<string, string> = {}

    X.split('').forEach((c) => {
      const rc = X['abcdefghijklmnopqrstuvwxyz'.indexOf(c)]

      lib[c] = rc
      revLib[rc] = c
    })
    const ss = s.map((v) => [v, replace(v, revLib)])

    ss.sort((a, b) => a[1].localeCompare(b[1]))

    const res = ss.map((v) => v[0])

    return res.join('\n')
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
