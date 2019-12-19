{
  const main = (input: string): void | string | number => {
    const r = reader(input)
    const N = r.n()

    const v = r.ns()
    const c = r.ns()

    let sum = 0

    for (let i = 0; i < N; i++) {
      const k = v[i] - c[i]

      sum += Math.max(0, k)
    }

    return sum
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
  const res = main(getInput())

  if (typeof res === 'number' || typeof res == 'string') console.log(res)
}
