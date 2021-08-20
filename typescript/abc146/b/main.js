// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const n = r.n()
  const s = r.s()

  console.log(_rot(s, n))
}

const _rot = (s /* :string */, n /*: number */) =>
  s
    .split('')
    .map(c => _shift(c, n))
    .join('')

const _shift = (c /*: string */, n /*: number */) => {
  const ac = 'A'.charCodeAt(0)

  return String.fromCharCode(((c.charCodeAt(0) + n - ac) % 26) + ac)
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
