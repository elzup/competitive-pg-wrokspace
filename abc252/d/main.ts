// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [N] = r.nn()
    const A = r.nn()

    const t: Record<number, number> = {}

    A.forEach((i) => {
      t[i] = (t[i] || 0) + 1
    })
    let sum = 0

    const u: Record<number, number> = {}

    Object.values(t).forEach((i) => {
      u[i] = (u[i] || 0) + 1
    })

    combination(Object.keys(u), 3).forEach((x) => {
      // console.log(x)

      sum += u[x[0]] * u[x[1]] * u[x[2]] * x[0] * x[1] * x[2]
    })
    combination(Object.keys(u), 2).forEach((x) => {
      const x0 = x[0]
      const x1 = x[1]
      const rn0 = u[x0]
      const rn1 = u[x1]

      sum += rn0 * (rn0 - 1) * x0 * rn0 * x1
      sum += rn1 * (rn1 - 1) * x1 * rn1 * x0
    })
    Object.entries(u).map(([k, v]) => {
      sum += Number(k)
    })

    // const l = Object.keys(t).length
    return sum
  }

  const _io = (i = 0) => {
    const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')

    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  outs.push(main())

  console.log(
    outs
      .map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
      .join('\n')
  )
}

function permutation(nums, k) {
  let ans: number[][] = []

  if (nums.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]]
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      let parts = nums.slice(0)

      parts.splice(i, 1)[0]
      let row = permutation(parts, k - 1)

      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]))
      }
    }
  }
  return ans
}

function combination(nums, k) {
  let ans: number[][] = []

  if (nums.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]]
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let row = combination(nums.slice(i + 1), k - 1)

      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]))
      }
    }
  }
  return ans
}
