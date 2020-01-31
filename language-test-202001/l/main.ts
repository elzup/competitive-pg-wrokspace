// import std = require('tstl')

{
  const main = (): void | string | number | string[] | number[] => {
    const io = _io()

    io.load()
    const [N, _Q] = io.nn()

    // io.write(`? ${} ${}`)

    const chr = (s: string): number => s.charCodeAt(0)
    const ord = String.fromCharCode

    const arr = _range(N).map(i => ord(chr('A') + i))

    quickSort(arr, (a, b) => {
      io.write(`${N} ${a} ${b}`)
      io.load()
      return io.s() < '<' ? 1 : -1
    })

    return arr.join('')
  }
  const _range = (n: number) => Array.from(Array(n).keys())

  function quickSort<T>(
    a: T[],
    compare: (v1: T, v2: T) => number,
    left = 0,
    right: number = a.length - 1
  ) {
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
      quickSort(a, compare, left, l - 1)
    }
    if (r + 1 < right) {
      quickSort(a, compare, r + 1, right)
    }
  }

  const _io = (lines: string[] = [], i = 0) => {
    const _rl = () => require('fs').readFileSync('/dev/stdin', 'utf8')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')
    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map(v => mn(sp(v)))
    const load = () => {
      lines = _rl()
        .trim()
        .split('\n')
      i = 0
    }
    const { write } = process.stdout

    return { lines, s, n, ss, nn, nls, nnls, load, write }
  }

  const _res = main()

  process.stdout

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
  if (typeof _res === 'object') console.log(_res.join(' '))
}
