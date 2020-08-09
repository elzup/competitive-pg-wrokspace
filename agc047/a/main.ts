// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [_N] = r.nn()
    const A = r.nnls()
    // 10 ** 9 倍 して 2 と 5 の約数を調べる

    const lib = [] as number[][]

    for (let i = 0; i <= 25; i++) {
      lib[i] = []
      for (let j = 0; j <= 25; j++) {
        lib[i][j] = 0
      }
    }

    A.forEach((a) => {
      const [c2, c5] = divisors(a[0] * 10 ** 10)

      // console.log([a[0], c2, c5])
      // console.log([a[0], c2 - 9, c5 - 9])
      lib[c2][c5]++
    })
    let sum = 0

    for (let i = 0; i <= 25; i++) {
      for (let j = 0; j <= 25; j++) {
        if (lib[i][j] === 0) continue
        // console.log('>', i - 9, j - 9, lib[i][j])
        for (let i2 = 0; i2 <= 25; i2++) {
          for (let j2 = 0; j2 <= 25; j2++) {
            if (lib[i2][j2] === 0) continue
            if (i * 25 + j < i2 * 25 + j2) continue

            if (i + i2 >= 20 && j + j2 >= 20) {
              if (i === i2 && j === j2) {
                // console.log()
                // console.log(i - 9, j - 9)
                // console.log((lib[i][j] * (lib[i][j] - 1)) / 2)
                sum += (lib[i][j] * (lib[i][j] - 1)) / 2
              } else {
                const a = lib[i][j] * lib[i2][j2]

                // console.log()
                // console.log(i - 9, j - 9, '-', i2 - 9, j2 - 9)
                // console.log(lib[i][j], lib[i2][j2])
                // console.log(a)

                sum += a
              }
            }
          }
        }
      }
    }

    return sum
  }
  const divisors = (n: number) => {
    const list = [0, 0]

    while (n % 2 === 0) {
      n /= 2
      list[0]++
    }
    while (n % 5 === 0) {
      n /= 5
      list[1]++
    }

    return list
  }

  const _io = (i = 0) => {
    const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')

    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  outs.push(main())

  console.log(
    outs
      .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}
