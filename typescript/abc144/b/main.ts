{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()

    const lib = {}

    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        lib[i * j] = true
      }
    }
    console.log(lib[N] ? 'Yes' : 'No')
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
