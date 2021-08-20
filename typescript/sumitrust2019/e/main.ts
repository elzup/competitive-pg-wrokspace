{
  const main = (input: string) => {
    const r = reader(input)
    const _N = r.n()
    const A = r.ns()
    let a = 0
    let b = 0
    let c = 0
    let res = 1

    A.forEach(v => {
      const l = Number(a === v) + Number(b === v) + Number(c === v)

      if (a === v) {
        a++
      } else if (b === v) {
        b++
      } else if (c === v) {
        c++
      }
      res = (res * l) % 1000000007
    })
    console.log(res)
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
