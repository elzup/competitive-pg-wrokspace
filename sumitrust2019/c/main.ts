{
  const main = (input: string) => {
    const r = reader(input)
    const X = r.n()
    const a: { [n: number]: boolean } = { 0: true }

    for (let i = 0; i < X; i++) {
      if (!a[i]) {
        continue
      }
      a[i + 100] = true
      a[i + 101] = true
      a[i + 102] = true
      a[i + 103] = true
      a[i + 104] = true
      a[i + 105] = true
    }
    console.log(a[X] ? 1 : 0)
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

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
