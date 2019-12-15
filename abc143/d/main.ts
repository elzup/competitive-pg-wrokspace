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

        const p = _bound(k, N - 1, l, l1 - l2, (a, b) => a > b)

        // console.log(p)
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

  const _bound = (
    lo: number,
    hi: number,
    arr: number[],
    value: number,
    compare: (a: number, b: number) => boolean
  ) => {
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2)

      if (compare(arr[mid], value)) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    return hi
  }

  const _binarySearch = <T>(
    lo: number,
    hi: number,
    iFunc: ((i: number) => T) | T[],
    compare: (v: T) => boolean
  ): number => {
    const valFunc = typeof iFunc === 'function' ? iFunc : v => iFunc[v]

    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2)

      if (compare(valFunc(mid))) {
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
