{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const { pairs } = _divisor(N)

    let res = Infinity

    pairs.forEach(([a, b]) => {
      const k = a + b - 2

      res = Math.min(res, k)
    })
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
  const _divisor = (n: number) => {
    const sq = Math.floor(Math.sqrt(n))
    const list: number[] = []
    const pairs: [number, number][] = []

    for (let i = sq; i > 0; i--) {
      if (n % i !== 0) {
        continue
      }
      list.unshift(i)
      if (sq * sq !== n) {
        list.push(n / i)
      }
      pairs.unshift([i, n / i])
    }
    return { list, pairs }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
