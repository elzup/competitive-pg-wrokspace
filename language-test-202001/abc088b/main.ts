// import std = require('tstl')

{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [_N] = r.nn()
    const A = r.nn()

    A.sort((a, b) => b - a)

    const res = A.reduce(
      (c, v) => {
        return [c[1] + v, c[0]]
      },
      [0, 0]
    )

    return Math.abs(res[0] - res[1])
  }

  const _reader = (str: string, i = 0) => {
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

  const _res = main(require('fs').readFileSync('/dev/stdin', 'utf8'))

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
  if (typeof _res === 'object') console.log(_res.join(' '))
}
