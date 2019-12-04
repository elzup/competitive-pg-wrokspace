// time year month day count
const _lastDay = m => ({ '2': 28 }[m] || 30 + ((m >> 3) ^ (m & 1)))
const _lastDay = m => ({ '2': 28 }[m] || 30 + ((m >> 3) ^ (m & 1)))

// leap year うるう年 閏年
const _isReapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
