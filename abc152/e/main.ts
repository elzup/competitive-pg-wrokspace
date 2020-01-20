{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()
    const aa = r.nn()
    const nums = _lcmDiv(aa)

    // console.log(lcm)
    let sum = 0

    for (let i = 0; i < N; i++) {
      const { groups } = primeFactorization(aa[i])
      let sum2 = 1

      Object.keys(nums).forEach(nk => {
        sum2 *= _powMod(Number(nk), nums[nk] - (groups[nk] || 0))
        sum2 %= _mod
      })
      sum += sum2
      sum %= _mod
    }

    return sum
  }
  const _powMod = (x: number, y: number) =>
    Array.from({ length: y }).reduce((p: number) => (p * x) % _mod, 1)

  const _lcmDiv = (a: number[]) => {
    // 集合の積を求める
    const nums = primeFactorization(a[0]).groups

    for (let i = 1; i < a.length; i++) {
      const { groups } = primeFactorization(a[i])
      // { a: 1, b: 1}
      // { b: 2, c: 2}
      // => { b: 1 } 最大公約数
      // => { a: 1, b: 2, c: 2 } 最小公倍数

      Object.keys(groups).forEach(k => {
        nums[k] = Math.max(groups[k], nums[k] || 0)
      })
    }
    return nums
  }

  const memos = {}
  const primeFactorization = (n: number) => {
    if (memos[n]) return memos[n]

    const sq = Math.floor(Math.sqrt(n))
    const groups: { [num: number]: number } = {}
    const list: number[] = []

    for (let i = 2; i <= sq; i++) {
      if (n % i !== 0) continue
      let r = 0

      do {
        r++
        n /= i
        list.push(i)
      } while (n % i === 0)
      groups[i] = r
    }

    if (n > sq) {
      list.push(n)
      groups[n] = 1
    }

    memos[n] = { list: [...list], groups: { ...groups } }
    return { list, groups }
  }

  const _mod = 10 ** 9 + 7
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
