{
  const main = (input: string) => {
    const r = reader(input)
    const [T1, T2] = r.ns()
    const [A1, A2] = r.ns()
    const [B1, B2] = r.ns()
    let k = T1 * A1
    let k2 = T1 * B1
    let s = T2 * A2
    let s2 = T2 * B2

    if (k > k2) {
      k = k2 - k // -
      s = s2 - s // +
    } else {
      k = k - k2 // -
      s = s - s2 // +
    }
    // console.log({ k, s })
    if (k + s === 0) {
      console.log('infinity')
      // console.log('I cannot output `infinity` from TypeScript.')
      return
    }
    if (k + s < 0) {
      console.log(0)
      return
    }
    console.log(Math.floor(-k / (s + k)) * 2 + Number(-k % (s + k) !== 0))

    // Math.floor()
  }

  // const values = obj => Object.keys(obj).map(e => obj[e]);

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const line = s
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)

    return { lines, line, s, n, ss, ns }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

  main(getInput())
}
