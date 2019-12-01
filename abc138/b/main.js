// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const n = r.n()
  const a = r.ns()
  const res = 1.0 / a.reduce((v, c) => c + 1 / v, 0)
  console.log(res)
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
