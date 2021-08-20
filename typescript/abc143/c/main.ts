{
  const main = (input: string) => {
    const r = reader(input)
    const n = r.n()
    const s = r.s()

    let sum = 1

    for (let i = 0; i < n - 1; i++) {
      if (s[i] !== s[i + 1]) {
        sum +=1
      }
    }

    console.log(sum)
  }

  const reader = (str: string) => {
    const lines = str.trim().split("\n")
    const s = () => lines.shift() || ""
    const n = () => Number(s())

    const ss = () => s().split(" ")
    const ns = () => ss().map(Number)
    const nls = () => lines.map(Number)

    return { lines, s, n, ss, ns, nls }
  }

  const getInput = () => require("fs").readFileSync("/dev/stdin", "utf8")

  main(getInput())
}
