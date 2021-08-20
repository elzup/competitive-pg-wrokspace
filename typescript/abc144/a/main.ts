{
  const main = (input: string) => {
    const r = reader(input)
    const [a, b] = r.ns()

    if (!(0 <= a && a <= 9 && 0 <= b && b <= 9)) {
      console.log(-1)
      return
    }
    console.log(a * b)
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
