// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const n = r.n()
  const a = r.ns()

  let p = 0
  let m = 0
  let z = 0

  a.forEach(v => {
    if (v === 0) {
      z++
    } else if (v > 0) {
      p++
    } else {
      m++
    }
  })

  console.log(p / n)
  console.log(m / n)
  console.log(z / n)
}

// const values = obj => Object.keys(obj).map(e => obj[e]);

const reader = (str /*: string*/) => {
  const lines = str.trim().split('\n')
  const s = () => lines.shift() || ''
  const line = s
  const n = () => Number(s())

  const ss = () => s().split(' ')
  const ns = () => ss().map(v => Number(v))

  return { lines, line, s, n, ss, ns }
}

const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')

main(getInput())
