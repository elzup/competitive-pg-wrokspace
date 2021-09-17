const uniq = (a: string[]) => a.filter((v, i, a) => a.indexOf(v) === i)

function pangrams(s: string): string {
  const chars = s
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')

  return uniq(chars).length === 26 ? 'pangram' : 'not pangram'
}
