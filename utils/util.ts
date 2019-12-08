/*
links

https://github.com/samchon/tstl
 */

// time year month day count
const _lastDay = (m: number) => ({ '2': 28 }[m] || 30 + ((m >> 3) ^ (m & 1)))

// leap year うるう年 閏年
const _isReapYear = (y: number) =>
  (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

// rot shift
const _rot = (s: string, n: number) =>
  s
    .split('')
    .map(c => _shift(c, n))
    .join('')

// charcode shift
const ac = 'A'.charCodeAt(0)
const _shift = (c: string, n: number) =>
  String.fromCharCode(((c.charCodeAt(0) + n - ac) % 26) + ac)

// loop
const _values = <T>(obj: { [k: string]: T }): T[] =>
  Object.keys(obj).map(e => obj[e])
const _map = <Val, T>(
  obj: Record<string, Val>,
  callback: (v: Val, k: string) => T
): T[] => Object.keys(obj).map(k => callback(obj[k], k))

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

// number of digit 10進数での 桁数
const _nod = (n /*: number*/) => String(n).length

type BinarySearch = <T>(
  min: number,
  max: number,
  iFunc: (i: number) => T,
  compare: (v: T) => 0 | 1 | -1
) => number
const _binarySearch: BinarySearch = (lo, hi, iFunc, compare) => {
  if (lo >= hi) {
    return Math.max(0, lo)
  }
  const mid = Math.floor((lo + hi) / 2)

  const cmp = compare(iFunc(mid))

  if (cmp > 0) {
    return _binarySearch(mid + 1, hi, iFunc, compare)
  }
  if (cmp < 0) {
    return _binarySearch(lo, mid - 1, iFunc, compare)
  }
  return mid
}
const _comp = <T = string | number>(a: T, b: T) => (a == b ? 0 : a > b ? 1 : -1)
