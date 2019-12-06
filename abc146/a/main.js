// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const n = r.s()

  console.log(['SUN', 'SAT', 'FRI', 'THU', 'WED', 'TUE', 'MON'].indexOf(n) || 7)
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
