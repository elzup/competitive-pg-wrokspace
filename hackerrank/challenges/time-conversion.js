// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const s = r.s()

  // 07:05:45PM
  const [hs, ms, tail] = s.split(':')
  const h = Number(hs)
  const ss = tail.substr(0, 2)
  const period = tail.substr(2, 2)

  if (h === 12) {
    console.log(`${period === 'PM' ? '12' : '00'}:${ms}:${ss}`)
  } else {
    console.log(`${period === 'PM' ? h + 12 : hs}:${ms}:${ss}`)
  }
}

// const values = obj => Object.keys(obj).map(e => obj[e]);

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
