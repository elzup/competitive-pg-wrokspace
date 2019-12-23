{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const N = r.n()
    const xys = r.nnls()

    xys.forEach((ab, i) => (ab[2] = i))
    const edges: Edge<number>[] = []

    xys.sort((a, b) => a[0] - b[0])
    // console.log(xys)

    for (let i = 0; i < xys.length - 1; i++) {
      const a = xys[i]
      const b = xys[i + 1]
      const l = Math.min(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]))

      edges.push([a[2], b[2], l])
    }
    xys.sort((a, b) => a[1] - b[1])
    for (let i = 0; i < xys.length - 1; i++) {
      const a = xys[i]
      const b = xys[i + 1]
      const l = Math.min(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]))

      edges.push([a[2], b[2], l])
    }

    const nodes = _range(N)
    const mst = _kruskal(nodes, edges)

    // console.log(edges)
    // console.log(mst)

    return mst.reduce((p, b) => p + b[2], 0)
  }

  const _range = (n: number) => Array.from(Array(n).keys())

  type Edge<T> = [T, T, number]
  const _unionFind = (n: number) => {
    const par: number[] = Array.from(Array(n).keys())
    const siz: number[] = Array(n).fill(1)

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
