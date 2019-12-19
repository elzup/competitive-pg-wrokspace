/*
links

https://github.com/samchon/tstl
 */

// time year month day count
const _lastDay = (m: number) => ({ '2': 28 }[m] || 30 + ((m >> 3) ^ (m & 1)))

// leap year うるう年 閏年
const _isReapYear = (y: number) =>
  (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

// rot shift
const _rot = (s: string, n: number) =>
  s
    .split('')
    .map(c => _shift(c, n))
    .join('')

const _arr2D = (h: number, w: number, fill = 0) =>
  new Array(h).fill(0).reduce(p => p.concat([Array(w).fill(fill)]), [])

const _range = (n: number) => Array.from(Array(n).keys())
const _distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

// charcode shift
const ac = 'A'.charCodeAt(0)
const _shift = (c: string, n: number) =>
  String.fromCharCode(((c.charCodeAt(0) + n - ac) % 26) + ac)

// loop
const _values = <T>(obj: { [k: string]: T }): T[] =>
  Object.keys(obj).map(e => obj[e])
const _map = <Val, T>(
  obj: Record<string, Val>,
  callback: (v: Val, k: string) => T
): T[] => Object.keys(obj).map(k => callback(obj[k], k))

// colleciton
const _groupBy = (arr, callback) =>
  arr
    .map(v => [v, callback(v)])
    .reduce((obj, [v, k]) => {
      if (!obj[k]) {
        obj[k] = []
      }
      obj[k].push(v)
      return obj
    }, {})

// number of digit 10進数での 桁数
const _nod = (n /*: number*/) => String(n).length

const _comp = <T = string | number>(a: T, b: T) => (a == b ? 0 : a > b ? 1 : -1)

const _decToBin = (dec: number, pad: number) =>
  ('0'.repeat(pad) + dec.toString(2))
    // .padStart(pad, '0')
    .slice(-pad)
    .split('')
    .map(Number)

// class UnionFind {
//   par: number[]

//   public:
//       vector <ll> par; // 各元の親を表す配列
//       vector <ll> siz; // 素集合のサイズを表す配列(1 で初期化)

//       // Constructor
//   constructor(sz_): par(sz_), siz(sz_, 1LL) {
//           for (ll i = 0; i < sz_; ++i) par[i] = i; // 初期では親は自分自身
//       }
//       void init(ll sz_) {
//           par.resize(sz_);
//           siz.assign(sz_, 1LL);  // resize だとなぜか初期化されなかった
//           for (ll i = 0; i < sz_; ++i) par[i] = i; // 初期では親は自分自身
//       }

//       // Member Function
//       // Find
//       ll root(ll x) { // 根の検索
//           while (par[x] != x) {
//               x = par[x] = par[par[x]]; // x の親の親を x の親とする
//           }
//           return x;
//       }

//       // Union(Unite, Merge)
//       bool merge(ll x, ll y) {
//           x = root(x);
//           y = root(y);
//           if (x == y) return false;
//           // merge technique（データ構造をマージするテク．小を大にくっつける）
//           if (siz[x] < siz[y]) swap(x, y);
//           siz[x] += siz[y];
//           par[y] = x;
//           return true;
//       }

//       bool issame(ll x, ll y) { // 連結判定
//           return root(x) == root(y);
//       }

//       ll size(ll x) { // 素集合のサイズ
//           return siz[root(x)];
//       }
//   };
