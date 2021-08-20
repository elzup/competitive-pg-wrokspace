{
  const main = input => {
    const r = _reader(input)
    const [N] = r.nn()

    for (let i = 0; i < N; i++) {
      const [y, m, d] = r.nn()

      if (y >= 2020 || (y === 2019 && m >= 5)) {
        console.log('REIWA')
      } else if (y === 1989 && m === 1 && d <= 7) {
        // 1/8
        console.log('SYOUWA')
      } else {
        console.log('HEISEI')
      }
    }

    return
  }

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
