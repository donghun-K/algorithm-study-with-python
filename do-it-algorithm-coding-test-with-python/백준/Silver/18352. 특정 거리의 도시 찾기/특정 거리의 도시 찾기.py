import sys

input = sys.stdin.readline

from collections import deque

N, M, K, X = map(int, input().split())
A = [[] for _ in range(N + 1)]
answer = []
visited = [-1] * (N + 1)


def bfs(v):
    q = deque()
    q.append(v)
    visited[v] += 1
    while q:
        now_node = q.popleft()
        for i in A[now_node]:
            if visited[i] == -1:
                visited[i] = visited[now_node] + 1
                q.append(i)

for _ in range(M):
    s, e = map(int, input().split())
    A[s].append(e)

bfs(X)

for i in range(N + 1):
    if visited[i] == K:
        answer.append(i)

if not answer:
    print(-1)

else:
    answer.sort()
for i in answer:
    print(i)
