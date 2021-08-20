{
  const main = (input: string) => {
    const r = reader(input)
    const _n = r.n()
    const ds = r.ns()

    let sum = 0

    ds.forEach((d1, i1) => {
      ds.forEach((d2, i2) => {
        if (!(i1 < i2)) {
          return
        }
        sum += d1 * d2
      })
    })
    console.log(sum)
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
