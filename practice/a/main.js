// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const a = r.n()
  const [c, b] = r.ns()
  const s = r.s()
  console.log(`${a + b + c} ${s}`)
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
