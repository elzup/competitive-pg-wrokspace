// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const _n = r.n()
  const a = r.ns()
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const _res = 1.0 / a.reduce((v, c) => c + 1 / v, 0)
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
