{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [H, _N] = r.nn()
    const A = r.nn()

    const sum = A.reduce((a, b) => b + a, 0)

    return H - sum > 0 ? 'No' : 'Yes'
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
    const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
  if (typeof _res === 'object') console.log(_res.join(' '))
}
