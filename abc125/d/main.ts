{
  const main = (input: string): void | string | number => {
    const r = reader(input)
    const N = r.n()
    const a = r.ns()

    const dp: number[][] = []

    dp[0] = []
    dp[0][0] = 0
    dp[0][1] = -Infinity
    for (let i = 1; i < N + 1; i++) {
      // console.log(dp[i - 1])
      dp[i] = []
      dp[i][0] = Math.max(dp[i - 1][0] + a[i - 1], dp[i - 1][1] - a[i - 1])
      dp[i][1] = Math.max(dp[i - 1][0] - a[i - 1], dp[i - 1][1] + a[i - 1])
    }
    // console.log(dp[N - 1])

    return dp[N][0]
  }

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const res = main(getInput())

  if (typeof res === 'number' || typeof res === 'string') console.log(res)
}
