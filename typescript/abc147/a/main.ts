{
  const main = (input: string) => {
    const r = reader(input)
    const [a, b, c] = r.ns()

    console.log(a + b + c >= 22 ? 'bust' : 'win')
  }

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const line = s
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)

    return { lines, line, s, n, ss, ns }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
