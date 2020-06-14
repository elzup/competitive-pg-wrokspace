// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()
    let a = r.nn()

    a.sort((x, y) => x - y)
    const hash = {}
    const dups = {}

    a.forEach((v) => {
      if (hash[v]) dups[v] = true
      hash[v] = true
    })
    a = Object.keys(hash).map(Number)
    const hit = {}
    let pc = 0

    a.forEach((v) => {
      if (!hit[v] && !dups[v]) {
        pc++
      }
      if (hit[v]) {
        return
      }
      for (var i = v; i <= 1000000; i += v) {
        hit[i] = true
      }
    })
    // console.log(a)

    // for (var i = 3; i < 1000000; i += 2) {
    //   if (primes.every((p) => i % p !== 0)) {
    //     primes.push(i)
    //   }
    // }

    // const primes: number[] = []

    // for (let i = 0; i < a.length; i++) {
    //   if (primes.every((p) => a[i] % p !== 0)) {
    //     if (!dups[a[i]]) pc++
    //     primes.push(a[i])
    //   }
    // }
    return pc
  }

  const _io = (i = 0) => {
    const str = require('fs').readFileSync('/dev/stdin', 'utf8')
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
