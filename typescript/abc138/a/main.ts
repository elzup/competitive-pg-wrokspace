{
  const main = (input: string) => {
    const r = reader(input)
    const a = r.n()
    const b = r.s()

    console.log(a < 3200 ? 'red' : b)
  }

  // const values = obj => Object.keys(obj).map(e => obj[e]);

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const line = s
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)

    return { lines, line, s, n, ss, ns }
  }

  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
}
