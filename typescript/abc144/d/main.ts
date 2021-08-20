{
  const resol = 10 ** 7

  const main = (input: string) => {
    const r = reader(input)
    const [a, b, x] = r.ns()
    const ih = x / a / a

    if (b / 2 > ih) {
      const t = (2 * x) / a / b

      const res = 90 - (Math.atan(t / b) * 180) / Math.PI

      console.log(res)
      return
    }
    const res = _binarySearch(0, 90 * resol, n => {
      const h = Math.tan(((n / resol) * Math.PI) / 180) * a

      return h / 2 < b - ih
    })

    console.log(res / resol)
  }

  const _binarySearch = (
    lo: number,
    hi: number,
    compare: (v: number) => boolean
  ) => {
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
