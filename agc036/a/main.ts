function main(input: string) {
  const lines = input.trim().split('\n')

  const [a, b, c] = lines[0].split(' ').map(Number)
  console.log({ a, b, c })
}

const values = obj => Object.keys(obj).map(e => obj[e])

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
