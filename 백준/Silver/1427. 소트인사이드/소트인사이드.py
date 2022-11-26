import sys

input = sys.stdin.readline
print = sys.stdout.write

A = list(input())

for i in range(len(A)):
    max = i
    for j in range(i + 1, len(A)):
        if A[j] > A[max]:
            max = j
    if A[i] < A[max]:
        A[i], A[max] = A[max], A[i]

for digit in A:
    print(digit)
