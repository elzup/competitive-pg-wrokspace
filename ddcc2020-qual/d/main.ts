{
  const main = (input: string) => {
    const r = reader(input)

    const M = r.n()
    const { lines } = r

    let sum = 0
    let dsum = 0
    for (let i = 0; i < M; i++) {
      const [d, c] = lines[i].split(' ').map(Number)
      sum += d * c
      dsum += c
    }
    const res = dsum - 1 + Math.floor(sum / 10)

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

  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
}
