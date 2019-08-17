function main(input: string) {
  const lines = input.trim().split('\n')

  const [n] = lines[0].split(' ').map(Number)
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (i >= 100000) {
    } else if (i >= 10000) {
      res += 1
    } else if (i >= 1000) {
    } else if (i >= 100) {
      res += 1
    } else if (i >= 10) {
    } else {
      res += 1
    }
  }
  console.log(res)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
