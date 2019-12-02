{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const S = r.s()
    const d1: { [d: string]: boolean } = {}
    const d2: { [d: string]: boolean } = {}
    const d3: { [d: string]: boolean } = {}
    const d1a: string[] = []
    const d2a: string[] = []
    let res = 0

    S.split('').forEach(c => {
      d2a.forEach(a => {
        if (!d3[a + c]) {
          d3[a + c] = true
          res++
        }
      })
      d1a.forEach(a => {
        if (!d2[a + c]) {
          d2[a + c] = true
          d2a.push(a + c)
        }
      })
      if (!d1[c]) {
        d1[c] = true
        d1a.push(c)
      }
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
