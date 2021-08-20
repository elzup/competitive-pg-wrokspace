{
  const main = input => {
    const r = _reader(input)
    const i = r.n()

    return [
      '',
      'nezumi',
      'mi-akyaltuto',
      'kuri',
      'ritiumuionndennti', // denti
      'tyougou',
      'torune-do',
      'donnkaku',
      'zyunnkaigurahu', //
      'riku', // oshi
      'tyakuriku',
      'kuraltuka-',
      'kane',
    ][i]
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
    const ssls = () => lines.slice(i).map(sp)

    return { lines, s, n, ss, nn, nls, nnls, ssls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
}
