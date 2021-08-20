{
  const main = (input: string): void | string | number => {
    const re = reader(input)
    const N = re.n()
    const a = re.ns()

    // gcd of 0~i
    const l: number[] = []
    const r: number[] = []

    l[0] = a[0]
    r[N - 1] = a[N - 1]

    for (let i = 1; i < N; i++) {
      l[i] = _gcd(l[i - 1], a[i])
    }
    for (let i = N - 2; i >= 0; i--) {
      r[i] = _gcd(r[i + 1], a[i])
    }

    // console.log(l)
    // console.log(r)

    let ans = 0

    for (let i = -2; i < N; i++) {
      // console.log(l[i] || r[i + 2], r[i + 2] || l[i])
      ans = Math.max(ans, _gcd(l[i] || r[i + 2], r[i + 2] || l[i]))
    }
    // Object.keys(lib).map(k => {
    //   const v = lib[k]

    //   if (v >= N - 1) {
    //     ans = Math.max(ans, Number(k))
    //   }
    // })
    return ans
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

  const _gcd = (a, b) => (b ? _gcd(b, a % b) : a)

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const res = main(getInput())

  if (typeof res === 'number' || typeof res === 'string') console.log(res)
}
