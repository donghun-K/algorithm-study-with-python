import sys

input = sys.stdin.readline

from collections import deque

N = int(input())
A = [[] for _ in range(N + 1)]

for _ in range(N):
    data = list(map(int, input().split()))
    index = 0
    S = data[index]
    index += 1
    while True:
        E = data[index]
        if E == -1:
            break
        V = data[index + 1]
        A[S].append((E, V))
        index += 2


def BFS(v):
    q = deque()
    q.append(v)
    visited[v] = True
    while q:
        p = q.popleft()
        for i in A[p]:
            if not visited[i[0]]:
                visited[i[0]] = True
                q.append(i[0])
                distance[i[0]] = distance[p] + i[1]


distance = [0] * (N + 1)
visited = [False] * (N + 1)
BFS(1)
max = 1

for i in range(2, N + 1):
    if distance[max] < distance[i]:
        max = i

distance = [0] * (N + 1)
visited = [False] * (N + 1)
BFS(max)
distance.sort()
print(distance[N])
