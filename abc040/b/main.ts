{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const n = r.n()

    let min = Infinity

    for (let i = 1; i <= n; i++) {
      const { pairs } = _divisors(i)
      const pair = pairs.pop()

      if (!pair) continue
      const diff = pair[1] - pair[0]

      min = Math.min(min, n - i + diff)
    }

    return min
  }
  const _divisors = (n: number) => {
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

  const _reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res == 'string') console.log(_res)
}
