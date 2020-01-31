{
  const lines: string[] = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split('\n')

  console.log(lines[0].split('').filter(v => v === '1').length)
}
