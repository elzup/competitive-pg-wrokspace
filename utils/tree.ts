// Union Find 最小全域木
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

type Edge<T> = [T, T, number]
const _kruskal = <T>(nodes: T[], edges: Edge<T>[]) => {
  const mst: Edge<T>[] = []
  const sortedEdges = edges.sort((a, b) => a[2] - b[2])
  const keys: string[] = nodes.map(String)
  const lib = keys.reduce((p, c, i) => Object.assign({}, lib, { [c]: i }), {})
  const uf = _unionFind(nodes.length)

  nodes.forEach((v, i) => (lib[String(v)] = i))

  sortedEdges.forEach(edge => {
    const u = lib[String(edge[0])]
    const v = lib[String(edge[1])]

    if (uf.issame(u, v)) return
    mst.push(edge)
    uf.merge(u, v)
  })
  return mst
}
