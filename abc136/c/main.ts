function main(input: string) {
  const lines = input.trim().split('\n')

  const [n] = lines[0].split(' ').map(Number)
  const h = lines[1].split(' ').map(Number)
  let v = 0
  const ok = h.every(hi => {
    if (v <= hi) {
      v = hi
      return true
    }
    return v <= hi + 1
  })
  console.log(ok ? 'Yes' : 'No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
