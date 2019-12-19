class UnionFind {
  par: number[] = []
  siz: number[] = []

  constructor(n: number) {
    this.par = Array(n)
    this.siz = Array(n)
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
