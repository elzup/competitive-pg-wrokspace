{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [N] = r.nn()

    if (N % 2 === 1) {
      return 0
    }
    let sum = 0

    for (let i = 1; 10 ** i <= N; i++) {
      const t = Math.floor(N / 10 ** i)

      sum += t

      console.log(sum)
      console.log(t)
    }

    return sum
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
}