function main(input: string) {
  const lines = input.trim().split('\n')

  const L = 'L'
  const R = 'R'
  const cs = lines[0].split('')
  let k = 0

  const a = cs.map(() => 0)

  cs.forEach((c, i) => {
    if (c === R) {
      k++
      return
    }
    if (k > 0) {
      a[i - 1] = Math.round(k / 2)
      a[i] = Math.floor(k / 2)
      k = 0
    }
  })

  cs.reverse().forEach((c, i) => {
    const j = a.length - i - 1

    if (c === L) {
      k++
      return
    }
    if (k > 0) {
      a[j + 1] += Math.round(k / 2)
      a[j] += Math.floor(k / 2)
      k = 0
    }
  })
  // console.log(a)
  console.log(a.join(' '))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
