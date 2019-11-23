{
  const main = (input: string) => {
    const r = reader(input)
    const _n = r.n()
    const a = r.ns()
    const len = a.reduce((i, j) => i + j, 0)

    let left = 0
    let right = len
    let min = right - left
    a.forEach(v => {
      left += v
      right -= v
      min = Math.min(Math.floor(Math.abs(right - left)), min)
    })
    console.log(min)
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
