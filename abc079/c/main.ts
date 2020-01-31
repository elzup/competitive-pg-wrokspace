{
  const s: string = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
  const getBit = (n, i) => (n >> i) & 1
  const p = '+-'

  const k = 3
  const o = Array.from(Array(k).keys())

  for (let i = 0; i < 2 ** k; i++) {
    const d = o.map(t => getBit(i, t))

    const l = s[0] + p[d[0]] + s[1] + p[d[1]] + s[2] + p[d[2]] + s[3]

    o.reduce((p, c) => p + s[c + 1], d, s[0])

    if (eval(l) === 7) {
      console.log(l + '=7')
      break
    }
  }
}
