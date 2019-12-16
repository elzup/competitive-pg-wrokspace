{
  const _mod = 10 ** 9 + 7

  const main = (input: string) => {
    const r = reader(input)
    const [n, _m] = r.ns()
    const a = r.nls()

    const dp: number[] = Array(n + 1)

    dp.fill(0)
    a.forEach(ai => (dp[ai] = -1))
    dp[0] = 1

    for (let i = 0; i < n; i++) {
      // console.log(dp.join(' '))
      if (dp[i] === -1) continue

      if (dp[i + 1] !== -1) {
        dp[i + 1] = (dp[i + 1] + dp[i]) % _mod
      }
      if (dp[i + 2] !== -1) {
        dp[i + 2] = (dp[i + 2] + dp[i]) % _mod
      }
    }
    console.log(dp[n])
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

  main(getInput())
}
