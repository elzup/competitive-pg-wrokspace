// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  function angleH(h: number, m: number): number {
    // h
    const deg = ((h % 12) / 12) * 360 + (m / 60) * 30

    return (deg * Math.PI) / 180
  }
  function angleM(m: number): number {
    // m
    // return (m / 60) * 360 * (Math.PI / 180)
    return (m * Math.PI) / 30
  }
  function co(angle: number, l: number): [number, number] {
    const sa = Math.sin(angle)
    const ca = Math.cos(angle)
    const x = Math.abs(sa) > 0.1 ** 10 ? l / sa : 0
    const y = Math.abs(ca) > 0.1 ** 10 ? l / ca : 0

    return [x, y]
  }

  const main = (): Print => {
    const r = _io()
    const [A, B, H, M] = r.nn()
    const angleA = angleH(H, M)
    const angleB = angleM(M)

    console.log((angleA * 180) / Math.PI)
    console.log((angleB * 180) / Math.PI)

    // const l = Math.sqrt(A ** 2 + B ** 2)
    const [ax, bx] = co(angleA, A)
    const [ay, by] = co(angleB, B)

    console.log(ax, bx)
    console.log(ay, by)

    return Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2)
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
