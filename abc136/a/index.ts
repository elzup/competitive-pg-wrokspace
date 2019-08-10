import * as fs from 'fs'
function main(input: string) {
  const r = reader(input)

  const [a, b] = r
    .nextLine()
    .split(' ')
    .map(Number)
  const c = Number(r.nextLine()[0])
  const s = r.nextLine()

  console.log(`${a + b + c} ${s}`)

  function reader(text: string) {
    return {
      lines: text.split('\n'),
      nextLine: this.lines.pop,
    }
  }
}

// if (!process.env.DEBUG) {
const input = fs.readFileSync('/dev/stdin', 'utf8')
main(input)
// } else {
//   const files = fs.readdirSync('./tests')
//   for (let i = 1; i <= files.length / 2; i++) {
//     files.forEach(file => {
//       console.log(file)
//     })
//   }
// }
