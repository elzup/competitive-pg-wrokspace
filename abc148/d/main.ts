{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [N] = r.nn()
    const a = r.nn()

    let k = 1
    let t = 0

    for (let i = 0; i < N; i++) {
      if (a[i] !== k) {
        t++
      } else {
        k++
      }
    }

    return k === 1 ? -1 : t
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
