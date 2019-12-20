const _unionFind = n => {
  const par: number[] = Array.from(Array(n).keys())
  const siz: number[] = Array(n).fill(1)

  // 根の検索
  const root = (x: number): number => {
    while (par[x] !== x) x = par[x] = par[par[x]]

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

  return { root, merge, issame, size }
}
