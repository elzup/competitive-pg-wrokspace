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
