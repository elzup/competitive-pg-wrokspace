
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