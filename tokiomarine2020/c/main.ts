// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    let [N, K] = r.nn()
    let A = r.nn()

    for (let i = 0; i < K; i++) {
      let lightTable = {}
      const next: number[] = []
      let l = 0

      for (let j = 0; j < N; j++) {
        next[j] = l + 1
        if (!lightTable[j + A[j]]) lightTable[j + A[j]] = 0
        lightTable[j + A[j]]--

        l += 1
        l += lightTable[j] || 0
      }

      l = 0
      lightTable = {}
      for (let j = N - 1; j >= 0; j--) {
        next[j] += l
        if (!lightTable[j - A[j]]) lightTable[j - A[j]] = 0
        lightTable[j - A[j]]--

        l += 1
        l += lightTable[j] || 0
      }

      console.log(next.join(' '))
      A = next
      if (A.every((v) => v === N)) {
        break
      }
    }
    return A
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
