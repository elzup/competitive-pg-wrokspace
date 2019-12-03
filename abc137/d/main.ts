import * as fs from 'fs'

{
  const main = (input: string) => {
    const lines = input.trim().split('\n')

    const [_n, m] = (lines.shift() || '0').split(' ').map(Number)
    const l: { a: number; b: number }[] = lines.map(line => {
      const [a, b] = line.split(' ').map(Number)

      return { a, b }
    })

    l.sort((v1, v2) => {
      if (v1.b === v2.b) {
        if (v1.a === v2.a) {
          return 0
        }
        return v1.a < v2.a ? 1 : -1
      }
      return v1.b < v2.b ? 1 : -1
    })
    let i = 0
    let res = 0
    const q: { a: number; b: number }[] = []

    l.map(({ a, b }) => {
      // console.log({ a, b })

      // console.log(m - i)
      if (m - i < a) {
        q.push({ a, b })
        return
      }

      // console.log('add')
      // console.log(b)
      res += b
      // console.log(res)
      i += 1
    })

    console.log(res)

    // console.log({ a, b, c })
  }
  const _comb2 = v => {
    if (v === 1) {
      return 0
    }
    return (v * (v - 1)) / 2
  }

  const _values = obj => Object.keys(obj).map(e => obj[e])

  const path = process.argv[2]

  if (!path) {
    main(fs.readFileSync('/dev/stdin', 'utf8'))
  } else {
    const testPath = `${path}/tests`
    const files = fs.readdirSync(testPath)
    const qn = files.length / 2

    for (let i = 1; i <= qn; i++) {
      console.log(`${testPath}/sample-${i}.in`)
      console.log('-- res')
      main(fs.readFileSync(`${testPath}/sample-${i}.in`, 'utf8'))
      console.log('-- expected')
      console.log(fs.readFileSync(`${testPath}/sample-${i}.out`, 'utf8'))
    }
  }
}
