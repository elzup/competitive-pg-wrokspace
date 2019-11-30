{
  const main = (input: string) => {
    const N = reader(input).n()
    while (true) {
      console.log('? ')
      const line = reader(getInput()).s()
      if (line === '-1') {
        break
      }
    }
  }

  // const values = obj => Object.keys(obj).map(e => obj[e]);

  const reader = (str: string) => {
    const lines = str.trim().split('\n')
    const s = () => lines.shift() || ''
    const line = s
    const n = () => Number(s())

    const ss = () => s().split(' ')
    const ns = () => ss().map(Number)
    return { lines, line, s, n, ss, ns }
  }

  const getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  main(getInput())
}
