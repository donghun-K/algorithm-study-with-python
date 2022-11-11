import sys

input = sys.stdin.readline

N = int(input())
K = int(input())

start = 1
end = K
ans = 0

while start <= end:
    mid = int((start + end) / 2)
    count = 0
    for i in range(1, N + 1):
        count += min(int(mid / i), N)
    if count < K:
        start = mid + 1
    else:
        ans = mid
        end = mid - 1

print(ans)