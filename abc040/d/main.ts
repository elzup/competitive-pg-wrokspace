{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [n, m] = r.ns()
    const aby: number[][] = []

    const uf = new UnionFind(n)

    for (let i = 0; i < m; i++) {
      const [a, b, y] = r.lines[i].split(' ').map(Number)

      aby.push([a - 1, b - 1, y])
    }

    const q = Number(r.lines[m])
    const vw: number[][] = []

    for (let i = 0; i < q; i++) {
      const [v, w] = r.lines[m + i + 1].split(' ').map(Number)

      vw.push([i, v - 1, w])
    }

    // sort by y(year)
    aby.sort((a, b) => b[2] - a[2])

    vw.sort((a, b) => b[2] - a[2])
    // console.log(aby)
    // console.log(vw)

    let ei = 0 // edge
    let vi = 0 // villiger

    while (vi < q) {
      if (ei >= m || vw[vi][2] >= aby[ei][2]) {
        // console.log('v')
        vw[vi][3] = uf.size(vw[vi][1])
        vi++
      } else {
        // console.log('e')
        uf.merge(aby[ei][0], aby[ei][1])
        ei++
      }
    }

    vw.sort((a, b) => a[0] - b[0])

    vw.forEach(([i, a, b, siz]) => {
      console.log(siz)
    })
    return
  }

  class UnionFind {
    par: number[] = []
    siz: number[] = []

    constructor(n: number) {
      this.par = Array(n)
      this.siz = Array(n).fill(1)
      for (let i = 0; i < n; ++i) {
        this.par[i] = i
      }
    }

    root(x: number): number {
      // 根の検索
      while (this.par[x] != x) {
        x = this.par[x] = this.par[this.par[x]]
      }
      return x
    }

    merge(x: number, y: number): boolean {
      x = this.root(x)
      y = this.root(y)
      if (x == y) return false
      if (this.siz[x] < this.siz[y]) [x, y] = [y, x]
      // merge technique（データ構造をマージするテク．小を大にくっつける）

      this.siz[x] += this.siz[y]
      this.par[y] = x
      return true
    }

    issame(x: number, y: number): boolean {
      return this.root(x) == this.root(y)
    }

    size(x: number): number {
      return this.siz[this.root(x)]
    }
  }

  const _reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res == 'string') console.log(_res)
}
