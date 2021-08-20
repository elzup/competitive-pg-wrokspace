{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [H, N] = r.nn()
    const A: { cost: number; power: number }[] = []

    const dp: number[] = []

    dp[0] = 0

    for (let i = 0; i < N; i++) {
      const [power, cost] = r.nn()

      A.push({ power, cost })
    }

    A.sort((a, b) => b.power / b.cost - a.power / a.cost)

    let min = Infinity

    // console.log(A)

    A.forEach(({ power, cost }) => {
      for (let i = 0; i < H; i++) {
        if (dp[i] === undefined) continue
        const newCost = dp[i] + cost

        if (i + power >= H) {
          min = Math.min(min, newCost)
          return
        }
        if (dp[i + power] === undefined) {
          dp[i + power] = newCost
        }
        dp[i + power] = Math.min(dp[i + power], newCost)
        // console.log(dp[i])
        // console.log(cost)
        // console.log(dp[i] + cost)
      }
    })
    // console.log(dp)

    return min
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
