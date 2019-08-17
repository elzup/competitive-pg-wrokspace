function main(input) {
  const r = reader(input)
  const [n, k] = r.an()
  const a = r.an()
  const s = a.reduce((p, c) => p + c)
  const divs = divisor(s)
  let res = 1
  divs.some(d => {
    const r = a.map(ai => ai % d).sort((a, b) => a - b)
    let mx = 0
    let sum = 0
    let y = n
    for (var j = 0; j < y && mx <= k; j++) {
      sum += r[j]
      mx += r[j]
      while (sum > 0) {
        sum -= d - r[--y]
      }
    }
    if (mx <= k) {
      res = d
      return true
    }
    return false
  })
  console.log(res)
}
// 10 1 2 22
// 3 1 2 1
// 3 1 2 1

//|6 6 5 4
//|21
// 1|6 5 4
// 1|15
// 1 1|5 4
//   2|9
// 1 1 2|4
//     4|4
// 1 1 2 3|

function divisor(n) {
  const rs = [n]
  const m = Math.sqrt(n)
  const x = m | 0
  if (x * x === n) rs.push(x)
  for (var i = 2; i < m; i++) {
    if (n % i === 0) {
      rs.push(i, n / i)
    }
  }
  return rs.sort((a, b) => b - a)
}

const reader = s => {
  const lns = s.trim().split('\n')
  const ls = () => lns.shift()
  const as = () => ls().split(' ')
  const an = () => as().map(Number)
  return { lns, ls, as, an }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
