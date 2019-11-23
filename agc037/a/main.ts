function main(input: string) {
  const r = reader1(input)
  const s = r.ls().split('')
  const sl = s.length
  let p = ''
  let a = 0
  for (let i = 0; i < sl; i++) {
    const c = s[i]
    if (c === p) {
      if (i + 1 < sl) {
        p = c + s[i + 1]
        a++
        i++
      }
    } else {
      a++
      p = c
    }
    // console.log(p)
  }
  console.log(a)

  // console.log({ a, b, c })
}

// const values = obj => Object.keys(obj).map(e => obj[e]);

const reader1 = (s: string) => {
  const lns = s.trim().split('\n')
  const ls = () => lns.shift() || ''
  const as = () => ls().split(' ')
  const an = () => as().map(Number)
  return { lns, ls, as, an }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
