{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const [n, m] = r.ns()
    const aby: number[][] = []

    const uf = _unionFind(n)

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

  const _unionFind = n => {
    const par: number[] = Array.from(Array(n).keys())
    const siz: number[] = Array(n).fill(1)

    // 根の検索
    const root = (x: number): number => {
      while (par[x] != x) {
        x = par[x] = par[par[x]]
      }
      return x
    }
    const merge = (x: number, y: number): boolean => {
      x = root(x)
      y = root(y)
      if (x == y) return false
      if (siz[x] < siz[y]) [x, y] = [y, x]
      // merge technique（データ構造をマージするテク．小を大にくっつける）
      siz[x] += siz[y]
      par[y] = x
      return true
    }
    const issame = (x: number, y: number) => root(x) == root(y)
    const size = (x: number) => siz[root(x)]

    return { root, merge, issame, size }
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
