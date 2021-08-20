// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const l1 = r.nn()
    const l2 = r.nn()
    const l3 = r.nn()
    const l = [l1, l2, l3]
    const [N] = r.nn()

    for (let i = 0; i < N; i++) {
      const [b] = r.nn()

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (l[i][j] === b) {
            l[i][j] = -1
          }
        }
      }
    }
    // console.log(l.map(v => v.join(',')).join('\n'))

    let hit = false

    for (let i = 0; i < 3; i++) {
      hit = hit || l[i][0] + l[i][1] + l[i][2] === -3
      hit = hit || l[0][i] + l[1][i] + l[2][i] === -3
    }
    hit = hit || l[0][0] + l[1][1] + l[2][2] === -3
    hit = hit || l[2][0] + l[1][1] + l[0][2] === -3
    return hit ? 'Yes' : 'No'
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
