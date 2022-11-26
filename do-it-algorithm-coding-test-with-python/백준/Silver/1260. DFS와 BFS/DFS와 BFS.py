import sys

sys.setrecursionlimit(10000)
input = sys.stdin.readline

from collections import deque

N, M, S = map(int, input().split())
A = [[] for _ in range(N + 1)]

for _ in range(M):
    s, e = map(int, input().split())
    A[s].append(e)
    A[e].append(s)

for i in range(N + 1):
    A[i].sort()


def DFS(v):
    print(v, end=" ")
    visited[v] = True
    for i in A[v]:
        if not visited[i]:
            DFS(i)


def BFS(v):
    q = deque()
    q.append(v)
    visited[v] = True
    while q:
        p_node = q.popleft()
        print(p_node, end=" ")
        for i in A[p_node]:
            if not visited[i]:
                visited[i] = True
                q.append(i)


visited = [False] * (N + 1)
DFS(S)
print()
visited = [False] * (N + 1)
BFS(S)
