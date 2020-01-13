/* eslint-disable @typescript-eslint/camelcase */
{
  const main = (
    input: string
  ): void | string | number | string[] | number[] => {
    const r = _reader(input)
    const [N] = r.nn()

    const xs: number[] = []
    const ys: number[] = []

    for (let i = 0; i < N; i++) {
      const [x, y] = r.nn()

      xs.push(x)
      ys.push(y)
    }

    const [_a, _b, res] = solvCircle(xs, ys)

    return res
  }
  const distance = (x1, y1, x2, y2) => {
    const dx = x2 - x1
    const dy = y2 - y1

    return Math.sqrt(dx * dx + dy * dy)
  }

  const LOOP_MAX = 100
  const CONVRGV = 0.1 ** 9

  const solvCircle = (pt_x: number[], pt_y: number[]) => {
    let mv_rate = 0.5 // 移動係数
    let max_dist = 0.0 // 中心点から最遠点までの距離
    let xsv = 0.0 // 中心点のx座標
    let ysv = 0.0 // 中心点のy座標
    let cx = 0.0 // 仮中心点のx座標
    let cy = 0.0 // 仮中心点のy座標
    let k = 0
    let cvgflg = false

    while (!cvgflg) {
      for (let i = 0; i < LOOP_MAX; i++) {
        // 最遠点を求める
        max_dist = 0.0

        for (let i = 0; i < pt_x.length; i++) {
          let dist = distance(cx, cy, pt_x[i], pt_y[i])

          if (dist > max_dist) {
            max_dist = dist
            k = i
          }
        }

        // 仮の中心点を計算
        cx += (pt_x[k] - xsv) * mv_rate
        cy += (pt_y[k] - ysv) * mv_rate

        // 移動距離が境界値を下回っていればループを抜ける
        if (distance(cx, cy, xsv, ysv) <= CONVRGV) {
          cx = xsv
          cy = ysv
          cvgflg = true
          break
        }

        xsv = cx
        ysv = cy
      }

      mv_rate /= 2.0
    }

    return [cx, cy, max_dist]
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
  if (typeof _res === 'object') console.log(_res.join(' '))
}
