import sys

input = sys.stdin.readline
print = sys.stdout.write
from collections import deque

N, M = map(int, input().split())
A = [[] for _ in range(N + 1)]
answer = [0] * (N + 1)


def bfs(v):
    q = deque()
    q.append(v)
    visited[v] = True
    while q:
        now_node = q.popleft()
        for i in A[now_node]:
            if not visited[i]:
                visited[i] = True
                answer[i] += 1
                q.append(i)


for _ in range(M):
    s, e = map(int, input().split())
    A[s].append(e)

for i in range(1, N + 1):
    visited = [False] * (N + 1)
    bfs(i)

max_val = 0

for i in range(1, N + 1):
    max_val = max(max_val, answer[i])

for i in range(1, N + 1):
    if max_val == answer[i]:
        print(str(i))
        print(" ")
