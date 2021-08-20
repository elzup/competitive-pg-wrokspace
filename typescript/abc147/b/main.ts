{
  const main = (input: string) => {
    const r = reader(input)
    const S = r.s()

    const sl = Math.floor(S.length / 2)
    // 7 => 0 1 2 [3] 4 5 6 => 3
    // 6 => 0 1 2 [] 3 4 5

    let res = 0

    for (let i = 0; i < sl; i++) {
      // console.log(S[i], S[S.length - i - 1])
      if (S[i] !== S[S.length - i - 1]) {
        res++
      }
    }
    console.log(res)
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
