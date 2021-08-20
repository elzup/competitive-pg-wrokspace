/* eslint-disable @typescript-eslint/no-unused-vars */

function quickSort<T>({
  a,
  compare,
  left = 0,
  right = a.length - 1,
}: {
  a: T[]
  compare: (v1: T, v2: T) => number
  left?: number
  right?: number
}) {
  const pivot = a[Math.floor((left + right) / 2)]
  var l = left
  var r = right

  while (true) {
    while (compare(a[l], pivot) > 0) {
      l++
    }
    while (compare(pivot, a[r]) > 0) {
      r--
    }
    if (r <= l) {
      break
    }

    var tmp = a[l]

    a[l] = a[r]
    a[r] = tmp
    l++
    r--
  }

  if (left < l - 1) {
    quickSort({ a, compare, left, right: l - 1 })
  }
  if (r + 1 < right) {
    quickSort({ a, compare, left: r + 1, right })
  }
}
