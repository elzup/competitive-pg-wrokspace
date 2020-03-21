// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [H, W] = r.nn()

    r.lines.shift()
    let s: (string | number)[][] = r.lines.map(line => line.split(''))
    let dm = 0

    if (s[0][0] === '.' && s[H - 1][W - 1] === '.') dm--
    // else if (s[0][0] === '.' && s[H - 1][W - 1] === '#') {
    //   dm = -3
    // }

    // console.log(s)

    let ans: null | number = null

    for (let i = 1; i < 400; i++) {
      const t: (string | number)[][] = [...s]

      const q: [number, number][] = []

      let d: undefined | [number, number] = [0, 0]
      let c = s[0][0] === '.' ? '#' : '.'

      t[0][0] = c

      while (d) {
        const [x, y] = d

        const v = [
          [1, 0],
          [0, 1],
        ]

        v.forEach(([vx, vy]) => {
          const ox = x + vx
          const oy = y + vy

          const v = t[ox] && t[ox][oy]

          if (!v) return
          if (v !== c) {
            t[ox][oy] = c
            q.push([ox, oy])

            if (ox === H - 1 && oy === W - 1) {
              ans = i
            }
          }
        })
        d = q.shift()
      }

      s = t

      // console.log(t.map(l => l.map(String).join('')).join('\n'))
      // console.log()
      if (ans !== null) break
    }
    if (ans === null) return

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return Math.max(0, Math.floor(ans / 2) + dm + 1)
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
