/* eslint-disable @typescript-eslint/no-unused-vars */

const getBit = (n, i) => (n >> i) & 1

const decToBin = (dec: number, pad: number) =>
  ('0'.repeat(pad) + dec.toString(2))
    // .padStart(pad, '0')
    .slice(-pad)
    .split('')
    .map(Number)

const countBinDigit = (n: number) => n.toString(2).length
