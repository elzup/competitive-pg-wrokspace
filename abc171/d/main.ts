// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()
    const A = r.nn()
    const [Q] = r.nn()
    const bc = r.nnls()

    const counts = {}
    let sum = 0

    const res: string[] = []

    A.forEach((a) => {
      if (!counts[a]) counts[a] = 0
      sum += a
      counts[a]++
    })

    //

    bc.forEach(([b, c]) => {
      if (!counts[b]) {
        res.push(String(sum))
        return
      }
      const d = c - b

      sum += counts[b] * d

      res.push(String(sum))

      if (!counts[c]) counts[c] = 0
      counts[c] += counts[b]
      counts[b] = 0
    })

    return res.join('\n')
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
