// @flow

const main = (input /*: string */) => {
  const r = reader(input)
  const [m1, d1] = r.ns()
  // const [m2, d2] = r.ns()
  console.log(
    Number(
      {
        [1]: 31,
        [2]: 28,
        [3]: 31,
        [4]: 30,
        [5]: 31,
        [6]: 30,
        [7]: 31,
        [8]: 31,
        [9]: 30,
        [10]: 31,
        [11]: 30,
        [12]: 31,
      }[m1] === d1
    )
  )
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
