// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N, T] = r.nn()

    type Store = { a: number; b: number }

    const storeLib: Record<string, number> = {}

    for (let i = 0; i < N; i++) {
      const [a, b] = r.nn()

      if (!(`${a},${b}` in storeLib)) storeLib[`${a},${b}`] = 0
      storeLib[`${a},${b}`]++
    }
    // console.log(storeLib)

    let t = 1
    let res = 0

    while (t <= T) {
      const map: Record<number, Store[]> = []

      Object.keys(storeLib).forEach(sk => {
        const [a, b] = sk.split(',').map(Number)

        const k = a * t + b

        if (!(k in map)) map[k] = []
        map[k].push({ a, b })
      })
      // console.log(t)
      // console.log(map)

      const mapks = Object.keys(map)

      if (mapks.length === 0) {
        break
      }
      const min = Number(mapks[0])

      map[min].sort((s1, s2) => {
        const r1 = s1.a - s2.a
        const r2 = s1.b - s2.b

        return r1 === 0 ? r1 : r2
      })

      const sk = `${map[min][0].a},${map[min][0].b}`

      storeLib[sk]--
      if (storeLib[sk] === 0) delete storeLib[sk]

      // console.log('min', min)

      // console.log('t check', t + min, T)
      if (t + min > T) {
        break
      }

      res++
      t += min

      t++
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
