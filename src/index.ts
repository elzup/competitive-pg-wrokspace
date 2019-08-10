function main(input: string) {
  const r = reader(input)

  const [a, b] = r
    .nextLine()
    .split(' ')
    .map(Number)
  const c = Number(r.nextLine()[0])
  const s = r.nextLine()

  console.log(`${a + b + c} ${s}`)
}

function reader(text: string) {
  return {
    lines: text.split('\n'),
    nextLine: () => this.lines.pop(),
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
