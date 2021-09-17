const uniq = (a: string[]) => a.filter((v, i, a) => a.indexOf(v) === i)
const vals = <T>(obj: Record<string, T>): T[] =>
  Object.keys(obj).map((key) => obj[key])

function gemstones(arr: string[]): number {
  const counter: Record<string, number> = {}

  arr.forEach((stones) => {
    uniq(stones.split('')).forEach((v) => {
      counter[v] = (counter[v] || 0) + 1
    })
  })
  return vals(counter).filter((v) => v === arr.length).length
}
