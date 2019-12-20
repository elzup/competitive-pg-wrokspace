// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const [A, B, X] = r.ns()

  const iFunc = i => {
    return i <= 10 ** 9 ? A * i + B * nod(i) : Infinity
  }
  const res = binarySearch(0, X * 2, iFunc, v => comp(X, v))

  console.log(res)
}

// type BinarySearch = <T>(min: number, max: number, iFunc: (i: number) => T, compare: (v: T) => 0 | 1 | -1) => number
/*::
type BinarySearch<T = any> = (min: number, max: number, iFunc: (i: number) => T, compare: (v: T) => 0 | 1 | -1) => number
*/
const binarySearch /*: BinarySearch<any> */ = (lo, hi, iFunc, compare) => {
  if (lo >= hi) {
    return Math.max(0, lo)
  }
  const mid = Math.floor((lo + hi) / 2)

  const cmp = compare(iFunc(mid))

  if (cmp > 0) {
    return binarySearch(mid + 1, hi, iFunc, compare)
  }
  if (cmp < 0) {
    return binarySearch(lo, mid - 1, iFunc, compare)
  }
  return mid
}
const comp = (a /*: number */, b /*: number */) => (a === b ? 0 : a > b ? 1 : -1)

const nod = (n /*: number*/) => String(n).length

const reader = (str /*: string*/) => {
  const lines = str.trim().split('\n')
  const s = () => lines.shift() || ''
  const n = () => Number(s())

  const ss = () => s().split(' ')
  const ns = () => ss().map(v => Number(v))

  return { lines, s, n, ss, ns }
}

const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

main(getInput())
