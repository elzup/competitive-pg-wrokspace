{
  const main = input => {
    const r = reader(input)
    const n = r.n()
    const ar = r.ss().map(s => s.split('').map(Number))
    let d = 0
    let res: number[] = []
    while (ar.some(v => v.length >= 1)) {
      ar.forEach(bn => {
        const n = bn.pop()
        if (!n) {
          return
        }
        d += n
      })
      res.push(d % 10)
      d = Math.floor(d / 10)
    }
    if (d !== 0) {
      res.push(d)
    }
    console.log(
      res
        .reverse()
        .map(String)
        .join('')
    )
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
