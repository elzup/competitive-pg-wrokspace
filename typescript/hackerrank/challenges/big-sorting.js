// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const _N = r.n()
  const a = r.lines
  const aByLen = _map(
    _groupBy(a, v => v.length),
    (v, digit) => [digit, v]
  ) /* as [number, number[]][] */
  let res = []

  aByLen.sort(([a, _av], [b, _bv]) =>
    Number(a) === Number(b) ? 0 : Number(a) > Number(b) ? 1 : -1
  )
  aByLen.forEach(([_k, nums]) => {
    nums.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
    res = res.concat(nums)
  })

  console.log(res.join('\n'))
}

const _map = (obj, callback) => Object.keys(obj).map(k => callback(obj[k], k))
// colleciton

const _groupBy = (arr, callback) =>
  arr
    .map(v => [v, callback(v)])
    .reduce((obj, [v, k]) => {
      if (!obj[k]) {
        obj[k] = []
      }
      obj[k].push(v)
      return obj
    }, {})
// const values = obj => Object.keys(obj).map(e => obj[e]);

const reader = (str /*: string*/) => {
  const lines = str.trim().split('\n')
  const s = () => lines.shift() || ''
  const n = () => Number(s())
  const ss = () => s().split(' ')
  const ns = () => ss().map(Number)
  const nls = () => lines.map(Number)

  return { lines, s, n, ss, ns, nls }
}

const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

main(getInput())
