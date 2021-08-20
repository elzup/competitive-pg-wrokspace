{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const a: { [i: number]: [number, number][] } = {}
    const na = Array.from(Array(N), (v, k) => k)

    for (let i = 0; i < N; i++) {
      const A = r.n()

      a[i] = []
      for (let j = 0; j < A; j++) {
        const [x, y] = r.ns()

        a[i].push([x - 1, y])
      }
    }

    const last = 1 << N
    let res = 0

    for (let k = 0; k < last; k++) {
      const ans = _decToBin(k, N)

      const ok = na.every(i => {
        if (ans[i] === 0) {
          // 不親切
          return a[i].some(([x, y]) => ans[x] !== y)
        } else {
          // 正直
          return a[i].every(([x, y]) => ans[x] === y)
        }
      })

      if (ok) {
        res = Math.max(
          res,
          ans.reduce((p, c) => p + c, 0)
        )
      }
    }
    console.log(res)
  }

  const _decToBin = (dec: number, pad: number) =>
    ('0'.repeat(pad) + dec.toString(2))
      // .padStart(pad, '0')
      .slice(-pad)
      .split('')
      .map(Number)

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
