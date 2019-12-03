{
  const main = (input: string) => {
    const r = reader(input)
    const [a, b] = r.ns()

    const prise = n => {
      if (n === 1) {
        return 300000
      } else if (n === 2) {
        return 200000
      } else if (n === 3) {
        return 100000
      }
      return 0
    }
    const res = prise(a) + prise(b)

    console.log(res === 600000 ? 1000000 : res)
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
