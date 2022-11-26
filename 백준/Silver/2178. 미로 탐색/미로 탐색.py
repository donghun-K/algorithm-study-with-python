import sys

input = sys.stdin.readline

from collections import deque

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

N, M = map(int, input().split())
A = [[0] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]

for i in range(N):
    nums = list(input())
    for j in range(M):
        A[i][j] = int(nums[j])


def BFS(i, j):
    q = deque()
    q.append((i, j))
    visited[i][j] = True
    while q:
        p = q.popleft()
        for k in range(4):
            x = p[0] + dx[k]
            y = p[1] + dy[k]
            if x >= 0 and y >= 0 and x < N and y < M:
                if A[x][y] != 0 and not visited[x][y]:
                    visited[x][y] = True
                    A[x][y] = A[p[0]][p[1]] + 1
                    q.append((x, y))


BFS(0, 0)
print(A[N - 1][M - 1])
