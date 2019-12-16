// 二分探索 binary search
const _binarySearch = (
  lo: number,
  hi: number,
  compare: (v: number) => boolean
) => {
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    if (compare(mid)) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return hi
}
