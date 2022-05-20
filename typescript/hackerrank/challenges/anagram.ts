const countup = (arr: (string | number)[]) => {
  const m = new Map<string | number, number>()

  arr.forEach((v) => {
    m.set(v, (m.get(v) || 0) + 1)
  })
  return m
}
const alphabets = 'abcdefghijklmnopqrstuvwxyz'

function anagram(s: string): number {
  if (s.length % 2 === 1) return -1
  const half = s.length / 2

  const a = countup(s.substring(0, half).split(''))
  const b = countup(s.substring(half, s.length).split(''))

  // console.log({ a, b })

  return (
    alphabets
      .split('')
      .map((c) => Math.abs((a.get(c) || 0) - (b.get(c) || 0)))
      .reduce((a, b) => a + b, 0) / 2
  )
}
console.log(anagram('abccab')) // 1
console.log(anagram('abccba')) // 0
console.log(anagram('abcca')) // -1

export default {}
