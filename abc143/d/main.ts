{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const l = r.ns()
    let res = 0

    l.sort((a, b) => b - a)
    for (let i = 0; i < N - 2; i++) {
      const l1 = l[i]

      for (let j = i + 1; j < N - 1; j++) {
        const l2 = l[j]
        const k = j + 1

        const p = _bound(k, N, i => l[i] > l1 - l2)

        res += p - j - 1
      }
    }

    console.log(res)
  }

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const _bound = (lo: number, hi: number, compare: (v: number) => boolean) => {
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2)

      if (compare(mid)) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    return hi
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
