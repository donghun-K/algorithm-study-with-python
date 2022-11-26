import sys

I = sys.stdin.readline

n = int(I())
m = int(I())
arr = list(map(int, I().split()))
arr.sort()

l = 0
r = n - 1
count = 0
while l < r:
    sum = arr[l] + arr[r]
    if sum == m:
        count += 1
        l += 1
        r -= 1
    elif sum < m:
        l += 1
    elif sum > m:
        r -= 1

print(count)