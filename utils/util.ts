/* eslint-disable @typescript-eslint/no-unused-vars */
/*
links

https://github.com/samchon/tstl
 */

// time year month day count
const lastDay = (m: number) => ({ '2': 28 }[m] || 30 + ((m >> 3) ^ (m & 1)))

// leap year うるう年 閏年
const isReapYear = (y: number) =>
  (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

// rot shift
const rot = (s: string, n: number) =>
  s
    .split('')
    .map(c => shift(c, n))
    .join('')

const arr2D = (h: number, w: number, fill = 0) =>
  new Array(h).fill(0).reduce(p => p.concat([Array(w).fill(fill)]), [])

const range = (n: number) => Array.from(Array(n).keys())
const product = (n: number, mod) =>
  range(n + 1).reduce((p, c) => (p * c) % mod, 1)

const chr = (s: string) => s.charCodeAt(0)
const ord = String.fromCharCode

const distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

// charcode shift
const ac = 'A'.charCodeAt(0)
const shift = (c: string, n: number) =>
  String.fromCharCode(((c.charCodeAt(0) + n - ac) % 26) + ac)

// loop
const values = <T>(obj: { [k: string]: T }): T[] =>
  Object.keys(obj).map(e => obj[e])
const map = <Val, T>(
  obj: Record<string, Val>,
  callback: (v: Val, k: string) => T
): T[] => Object.keys(obj).map(k => callback(obj[k], k))

// colleciton
const groupBy = (arr, callback) =>
  arr
    .map(v => [v, callback(v)])
    .reduce((obj, [v, k]) => {
      if (!obj[k]) {
        obj[k] = []
      }
      obj[k].push(v)
      return obj
    }, {})
