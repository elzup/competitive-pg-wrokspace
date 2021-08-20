{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()

    const memo: { [i: number]: number } = {}
    const len = String(N).length
    const ni = Number(String(N)[0])
    const nj = Number(String(N)[len - 1])
    const nc = Number(String(N).substr(1, len - 2))

    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        const id = i * 10 + j

        memo[id] = 0

        for (let k = 0; k < len - 2; k++) {
          memo[id] += 10 ** k
        } // TODO Number('1'.repeat(k))
        if (i === j && i <= N) {
          memo[id] += 1
        }
        if (len === 1) {
          continue
        }
        // k === len - 2 の処理
        if (i > ni) {
          continue
        }
        if (i < ni) {
          memo[id] += 10 ** (len - 2)
          continue
        }
        memo[id] += nc + 1
        if (j > nj) {
          memo[id] -= 1
        }
      }
    }

    let sum = 0

    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (i === j) {
          sum += memo[i * 10 + j] ** 2
        } else {
          sum += memo[i * 10 + j] * memo[j * 10 + i]
        }
      }
    }

    return sum
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
