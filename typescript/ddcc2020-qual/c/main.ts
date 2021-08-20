{
  const main = (input: string) => {
    const r = reader(input)
    const [H, W, _K] = r.ns()
    const s: (number | string)[][] = r.lines.map(line => line.split(''))
    const _a = [...s]

    let fillMaster = 0

    for (let y = 0; y < H; y++) {
      let fill = 0

      for (let x = 0; x < W; x++) {
        if (s[y][x] === '#') {
          fill += 1
        }
        if (fill > 0) {
          s[y][x] = fill + fillMaster
        } else {
          s[y][x] = 0
        }
      }
      if (fill === 0) {
        continue
      }
      for (let x = 0; x < W && s[y][x] === 0; x++) {
        s[y][x] = fillMaster + 1
      }
      fillMaster += fill
    }
    for (let y = 1; y < H; y++) {
      if (s[y][0] !== 0) {
        continue
      }
      s[y] = s[y - 1]
    }
    for (let y = H - 2; y >= 0; y--) {
      if (s[y][0] !== 0) {
        continue
      }
      s[y] = s[y + 1]
    }
    console.log(s.map(cs => cs.join(' ')).join('\n'))
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
