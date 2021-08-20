{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [N, K] = r.nn()
    const [R, S, P] = r.nn()
    const T = r.s()
    const dp: number[] = []
    const t: number[] = T.split('').map(c => ({ r: P, s: R, p: S }[c]))

    for (let i = 0; i < N; i++) {
      const ts = T[i]
      const tn = t[i]

      if (i === 0) {
        dp[i] = tn
      } else if (i < K || ts !== T[i - K]) {
        dp[i] = +tn
      } else {
        if (dp[i - K] === 0) {
          dp[i] = tn
        } else {
          dp[i] = 0
        }
      }
    }

    return dp.reduce((a, b) => a + b, 0)
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
