/* eslint-disable  */
import { next_permutation } from 'tstl/ranges'
import { Vector } from 'tstl/container/Vector'

const x = new Vector<number>([0, 1, 2, 3])

while (true) {
  const t = next_permutation(x)

  if (!t) break
  console.log(t)
}
console.log(x)

export default {}

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
