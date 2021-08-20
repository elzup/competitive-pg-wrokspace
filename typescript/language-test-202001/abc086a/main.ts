{
  const lines: string[] = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split('\n')
  const [a, b] = lines[0].split(' ').map(Number)

  console.log(['Even', 'Odd'][(a * b) % 2])
}
