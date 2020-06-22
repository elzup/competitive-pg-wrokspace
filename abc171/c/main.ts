// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()

    let n = N - 1
    let i = 1

    for (; i < 100; i++) {
      if (n >= 26 ** i) {
        n -= 26 ** i
      } else {
        break
      }
    }
    // i桁

    const strs = n.toString(26).padStart(i, '0')
    const chr = (s: string) => s.charCodeAt(0)
    const ord = String.fromCharCode

    return strs
      .split('')
      .map((v) => {
        if (v <= '9') {
          return 'abcdefghij'[+v]
        }
        return ord(chr(v) + 10)
      })
      .join('')
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
