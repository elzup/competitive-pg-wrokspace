// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()
    const L = r.nn()
    let i = 0

    for (let ai = 0; ai < N; ai++) {
      const al = L[ai]

      for (let bi = ai + 1; bi < N; bi++) {
        const bl = L[bi]

        for (let ci = bi + 1; ci < N; ci++) {
          const cl = L[ci]

          if (al === bl || bl === cl || cl === al) continue

          if (al + bl > cl && bl + cl > al && al + cl > bl) {
            i++
          }
        }
      }
    }

    return i
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
