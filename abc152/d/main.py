

li = list(map(int,input().split()))
N = li[0]
aa = list(map(int,input().split()))

mod = 10 ** 9 + 7

def gcd(a, b):
  if b:
    return gcd(b, a % b)
  return a

def lcm(a, b):
  return a * b / gcd(a, b)


r = 1
for a in aa:
  r = lcm(int(r), int(a))

ans = 0
for a in aa:
  ans += int(r / a)
  ans %= mod

print(ans)