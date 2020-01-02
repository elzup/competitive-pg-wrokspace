{
  const main = input => {
    const r = _reader(input)
    const [N] = r.nn()

    for (let i = 0; i < N; i++) {
      const [m, d] = r.nn()

      if (m === 1 && d === 1) {
        console.log(0)
        continue
      }
      const lm = _lastDay(m)
      let sum = lm - d + 1

      for (let i = m + 1; i <= 12; i++) {
        sum += _lastDay(i)
      }
      console.log(sum)
    }

    return
  }
  const _lastDay = m => ({ '2': 29 }[m] || 30 + ((m >> 3) ^ (m & 1)))

  const _reader = (str, i = 0) => {
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = v => v.map(Number)
    const sp = v => v.split(' ')
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
