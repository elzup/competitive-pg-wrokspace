{
  const main = (input: string) => {
    const r = reader(input)
    const n = r.n()

    const base = Math.floor(n / 1.08)
    const checks = [-2, -1, 0, 1, 2]
    const res = checks
      .map(v => v + base)
      .some(v => {
        if (Math.floor(v * 1.08) === n) {
          console.log(v)
          return true
        }
        return false
      })
    if (!res) {
      console.log(':(')
    }
  }

  // const values = obj => Object.keys(obj).map(e => obj[e]);

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    return { lines, s, n, ss, ns }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  main(getInput())
}
