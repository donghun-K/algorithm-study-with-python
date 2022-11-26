import sys
from collections import deque

I = sys.stdin.readline


N, L = map(int, I().split())
A = list(map(int, I().split()))
deq = deque()

for i in range(N):
    while deq and deq[-1][0] > A[i]:
        deq.pop()
    deq.append((A[i], i))
    if deq[0][1] <= i - L:
        deq.popleft()
    print(deq[0][0], end=" ")
