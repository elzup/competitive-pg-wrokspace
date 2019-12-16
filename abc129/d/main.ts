{
  const main = (input: string) => {
    const read = reader(input)
    const [H, W] = read.ns()
    const s = read.lines

    const l: number[][] = _arr2D(H, W)
    const r: number[][] = _arr2D(H, W)
    const t: number[][] = _arr2D(H, W)
    const d: number[][] = _arr2D(H, W)

    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (s[i][j] !== '#') l[i][j] = (l[i][j - 1] || 0) + 1
        if (s[i][j] !== '#') t[i][j] = (i > 0 ? t[i - 1][j] : 0) + 1
        if (s[i][W - j - 1] !== '#') r[i][W - j - 1] = (r[i][W - j] || 0) + 1
        if (s[H - i - 1][j] !== '#')
          d[H - i - 1][j] = (i > 0 ? d[H - i][j] : 0) + 1
      }
    }

    // console.log(t.map(ll => ll.join('')).join('\n'))
    // console.log(d.map(ll => ll.join('')).join('\n'))
    let max = 0
    const _a = [...[1, 2]]

    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (s[i][j] === '#') continue

        const score = l[i][j] + r[i][j] + t[i][j] + d[i][j] - 3

        max = Math.max(max, score)
      }
    }
    console.log(max)
  }
  const _arr2D = (h: number, w: number, fill = 0) =>
    new Array(h).fill(0).reduce(p => p.concat([Array(w).fill(fill)]), [])

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
