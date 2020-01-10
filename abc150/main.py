
li = list(map(int,input().split()))
N = li[0]
M = li[1]
aa = list(map(int,input().split()))

def gcd(a, b):
  if b:
    return gcd(b, a % b)
  return a

def lcm(a, b):
  return a * b / gcd(a, b)


r = 1
for a in aa:
  r = lcm(int(r), int(a / 2))

# print(r)
# print(M / r)

print(int(M / r / 2 + 0.5))