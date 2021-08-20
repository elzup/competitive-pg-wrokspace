{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const n = r.n()
    const a = r.nls()

    const uf = _unionFind(n)

    a.forEach((v, i) => {
      // console.log(v, i)
      uf.merge(v - 1, i)
    })
    // console.log(uf)
    if (!uf.issame(0, 1)) {
      return -1
    }
    // return uf.level(1)

    let i = 0
    let now = 0

    while (now !== 1) {
      now = a[now] - 1
      i++
      if (i >= n) {
        return -1
      }
    }
    return i
  }

  const _unionFind = n => {
    const par: number[] = Array.from(Array(n).keys())
    const siz: number[] = Array(n).fill(1)

    // 根の検索
    const root = (x: number): number => {
      while (par[x] !== x) {
        x = par[x] = par[par[x]]
      }
      return x
    }
    const merge = (x: number, y: number): boolean => {
      x = root(x)
      y = root(y)
      if (x === y) return false
      if (siz[x] < siz[y]) [x, y] = [y, x]
      // merge technique（データ構造をマージするテク．小を大にくっつける）
      siz[x] += siz[y]
      par[y] = x
      return true
    }
    const issame = (x: number, y: number) => root(x) === root(y)
    const size = (x: number) => siz[root(x)]
    const level = (x: number) => (x === root(x) ? 0 : level(par[x]))

    return { par, siz, root, merge, issame, size, level }
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
}
