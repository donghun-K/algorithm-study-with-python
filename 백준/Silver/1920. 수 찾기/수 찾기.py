import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
A.sort()
M = int(input())
T = list(map(int, input().split()))

for target in T:
    find = False
    start = 0
    end = N - 1
    while start <= end:
        mid_i = int((start + end) / 2)
        mid_v = A[mid_i]
        if mid_v > target:
            end = mid_i - 1
        elif mid_v < target:
            start = mid_i + 1
        else:
            find = True
            break
    if find:
        print(1)
    else:
        print(0)