// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const _n = r.n()
  const grades = r.lines.map(Number)

  const res = grades.map(v => {
    if (v < 38) {
      return v
    }
    const k = v % 5

    if (k >= 3) {
      return v + 5 - k
    }
    return v
  })

  console.log(res.join('\n'))
}

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
