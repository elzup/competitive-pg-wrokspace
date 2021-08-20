{
  const main = (input: string) => {
    const r = reader(input)
    const _N = r.n()
    const W = r.ns()

    const sum = W.reduce((a, b) => a + b, 0)
    let p = 0
    let min = sum

    W.forEach(v => {
      p += v
      min = Math.min(min, Math.abs(p - (sum - p)))
    })

    console.log(min)
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
