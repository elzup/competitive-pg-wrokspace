{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [H, W] = r.nn()

    const s: string[][] = []

    for (let i = 0; i < H; i++) {
      s.push(r.s().split(''))
    }
    let dlen = 0

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        if (s[y][x] === '#') continue
        const s2 = [...s.map(l => [...l])]
        const queue: [number, number, number][] = [[y, x, 0]]

        s2[y][x] = 'x'

        let i = 0

        while (queue[i]) {
          const k = queue[i++]

          if (!k) return
          const [y, x, d] = k

          const check = (y, x) => {
            const res = s2[y] && s2[y][x] === '.'

            if (res) s2[y][x] = 'x'
            return res
          }

          if (check(y, x - 1)) queue.push([y, x - 1, d + 1])
          if (check(y, x + 1)) queue.push([y, x + 1, d + 1])
          if (check(y - 1, x)) queue.push([y - 1, x, d + 1])
          if (check(y + 1, x)) queue.push([y + 1, x, d + 1])

          dlen = Math.max(dlen, d)
        }
      }
    }
    return dlen
  }

  const _reader = (str: string, i = 0) => {
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')
    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map(v => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
  if (typeof _res === 'object') console.log(_res.join(' '))
}
