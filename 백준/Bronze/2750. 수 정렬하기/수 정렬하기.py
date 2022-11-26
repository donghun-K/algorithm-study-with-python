import sys

input = sys.stdin.readline

# Bubble sort

N = int(input())
A = [0] * N

for i in range(N):
    A[i] = int(input())

for i in range(N - 1):
    count = 0
    for j in range(N - 1 - i):
        if A[j] > A[j + 1]:
            A[j], A[j + 1] = A[j + 1], A[j]
            count += 1
    if count == 0:
        break

for num in A:
    print(num)
