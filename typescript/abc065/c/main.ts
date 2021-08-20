{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [n, m] = r.nn()

    if (Math.abs(m - n) >= 2) {
      return 0
    }
    let res = _product(m, _mod, _product(n, _mod, 1))

    if (m === n) {
      res *= 2
    }
    return res % _mod
  }
  const _mod = 10 ** 9 + 7
  const _range = (n: number) => Array.from(Array(n).keys())
  const _product = (n: number, mod, start: number) =>
    _range(n).reduce((p, c) => (p * (c + 1)) % mod, start)

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
}
