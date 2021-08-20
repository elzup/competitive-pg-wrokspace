{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const X = r.n()

    for (let i = X; i < X + 10000; i++) {
      if (_isPrime(i)) {
        return i
      }
    }

    return -1
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
  const _isPrime = (n: number) => {
    for (var i = 2; i < n; i++) if (n % i === 0) return false
    return n > 1
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
}
