{
  const main = (input: string) => {
    const r = reader(input)
    const N = r.n()
    const xys = r.lines.map(line => line.split(' ').map(Number))

    const patterns = permutation(_range(N))

    let sum = 0

    patterns.forEach(ns => {
      let sumi = 0

      for (let i = 0; i < N - 1; i++) {
        const p1 = ns[i]
        const p2 = ns[i + 1]

        const [x1, y1] = xys[p1]
        const [x2, y2] = xys[p2]

        sumi += _distance(x1, y1, x2, y2)
      }
      sum += sumi
    })

    console.log(sum / patterns.length)
  }
  const _range = (n: number) => Array.from(Array(n).keys())
  const _distance = (x1, y1, x2, y2) =>
    Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

  const permutation = <T>(
    post: T[],
    result: T[][] = [],
    pre: T[] = [],
    n: number = post.length
  ) => {
    if (n > 0) {
      post.forEach((_, i) => {
        const rest = [...post]
        const elem = rest.splice(i, 1)

        permutation(rest, result, [...pre, ...elem], n - 1)
      })
    } else {
      result.push(pre)
    }
    return result
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
