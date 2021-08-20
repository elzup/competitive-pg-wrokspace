// import std = require('tstl')

{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [A] = r.nn()
    const [B] = r.nn()
    const [C] = r.nn()
    const [X] = r.nn()

    let res = 0

    for (let ai = 0; ai <= A; ai++) {
      for (let bi = 0; bi <= B; bi++) {
        for (let ci = 0; ci <= C; ci++) {
          res += Number(ai * 500 + bi * 100 + ci * 50 === X)
        }
      }
    }
    return res

    return
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
