import sys

I = sys.stdin.readline

N = int(I())
A = list(map(int, I().split()))
stack = []
answer = [-1] * N

for i in range(N):
    while stack and A[stack[-1]] < A[i]:
        answer[stack.pop()] = A[i]
    stack.append(i)


result = ""

for i in range(N):
    result += str(answer[i]) + " "

print(result)