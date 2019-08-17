function main(input: string) {
  const lines = input.trim().split('\n')

  const [a, b, c] = lines[0].split(' ').map(Number)

  console.log(Math.max(0, c - (a - b)))
}

const values = obj => Object.keys(obj).map(e => obj[e])

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
