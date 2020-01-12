{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()
    const xx = r.nn()

    const _mod = 10 ** 9 + 7

    const dd: number[] = []

    for (let i = 0; i < N - 1; i++) {
      dd[i] = xx[i + 1] - xx[i]
    }
    let res = 0
    let sum = (N * (N - 1)) / 2
    let mul = 1

    for (let i = N - 2; i >= 0; i--) {
      mul = (mul * (N - 1 - i)) % _mod

      res += (((dd[i] * sum) % _mod) * mul) % _mod
      sum -= i + 1
    }

    return res
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
