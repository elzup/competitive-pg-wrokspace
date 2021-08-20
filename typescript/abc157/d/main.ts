// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N, M, K] = r.nn()

    const uf = _unionFind(N)
    const friends: number[] = []

    for (let i = 0; i < M; i++) {
      let [a, b] = r.nn()

      a--
      b--

      uf.merge(a, b)
      friends[a] = (friends[a] || 0) + 1
      friends[b] = (friends[b] || 0) + 1
    }

    const blocks: number[][] = []

    for (let i = 0; i < K; i++) {
      let [a, b] = r.nn()

      a--
      b--

      if (!blocks[a]) blocks[a] = []
      if (!blocks[b]) blocks[b] = []
      blocks[a].push(b)
      blocks[b].push(a)
    }
    const res: number[] = []

    for (let i = 0; i < N; i++) {
      const size = uf.size(i)
      const f = friends[i] || 0

      const b = (blocks[i] || []).map(v => uf.issame(v, i)).filter(Boolean)
        .length

      res.push(size - f - b - 1)
    }

    return res.map(String).join(' ')
  }

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

  const _io = (i = 0) => {
    const str = require('fs').readFileSync('/dev/stdin', 'utf8')
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

  outs.push(main())

  console.log(
    outs
      .map(line => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}
