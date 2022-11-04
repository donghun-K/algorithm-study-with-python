import sys

I = sys.stdin.readline

from collections import deque

N = int(I())
deq = deque()

for i in range(1, N + 1):
    deq.append(i)

while len(deq) != 1:
    deq.popleft()
    deq.append(deq.popleft())

print(deq[0])