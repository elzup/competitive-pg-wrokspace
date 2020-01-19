{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()

    const ranges: [number, number][] = []
    const dp: { count: number; max: number }[] = []

    for (let i = 0; i < N; i++) {
      const [X, L] = r.nn()

      ranges.push([X - L + 1, X + L - 1])
    }
    ranges.sort((a, b) => a[0] - b[0])

    dp[-1] = { count: 0, max: -Infinity }

    for (let i = 0; i < N; i++) {
      if (dp[i - 1].max < ranges[i][0]) {
        dp[i] = { count: dp[i - 1].count + 1, max: ranges[i][1] }
      } else if (dp[i - 1].max > ranges[i][1]) {
        dp[i] = { count: dp[i - 1].count, max: ranges[i][1] }
      } else {
        dp[i] = dp[i - 1]
      }
    }

    console.log(dp[N - 1].count)

    return
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
