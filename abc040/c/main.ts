{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const N = r.n()
    const a = r.ns()
    const dp: number[] = []

    dp[0] = 0
    dp[1] = Math.abs(a[1] - a[0])
    for (let i = 2; i < N; i++) {
      dp[i] = Math.min(
        dp[i - 1] + Math.abs(a[i - 1] - a[i]),
        dp[i - 2] + Math.abs(a[i - 2] - a[i])
      )
    }

    return dp[N - 1]
  }

  const _reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
}
