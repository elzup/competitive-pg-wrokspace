{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()
    const P = r.s().replace(/ /g, '')
    const Q = r.s().replace(/ /g, '')

    // console.log(P)
    // console.log(Q)

    const a: number[][] = []

    generatePermutation(a, [], range(1, N), N)

    let start = 0
    let end = 0

    // console.log(a.map(v => v.map(String).join('')))

    a.map(v => v.map(String).join('')).forEach((v, i) => {
      if (v === P) {
        start = i
      }
      if (v === Q) {
        end = i
      }
    })

    return Math.abs(start - end)
  }

  const generatePermutation = function(perm, pre, post, n) {
    var elem, i, rest, len

    if (n > 0)
      for (i = 0, len = post.length; i < len; ++i) {
        rest = post.slice(0)
        elem = rest.splice(i, 1)
        generatePermutation(perm, pre.concat(elem), rest, n - 1)
      }
    else perm.push(pre)
  }

  const range = (a: number, b: number) => {
    const nums: number[] = []

    for (let i = a; i <= b; i++) nums.push(i)
    return nums
  }

  const _range = (n: number) => Array.from(Array(n).keys())
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
