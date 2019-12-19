{
  const main = (input: string) => {
    const r = reader(input)
    const n = r.n()
    const s = r.s()

    const a = s.substring(0, n / 2)
    const b = s.substring(n / 2)

    console.log(a === b ? 'Yes' : 'No')
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
