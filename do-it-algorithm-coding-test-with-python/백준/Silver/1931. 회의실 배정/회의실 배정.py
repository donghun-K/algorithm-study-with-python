import sys

input = sys.stdin.readline

N = int(input())

A = [[0] * 2 for _ in range(N)]

for i in range(N):
    A[i][1], A[i][0] = map(int, input().split())

A.sort()
count = 0
end = -1

for i in range(N):
    if A[i][1] >= end:
        end = A[i][0]
        count += 1

print(count)
