import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N = int(input())
is_even = True


def dfs(node):
    global is_even
    visited[node] = True
    for i in A[node]:
        if not visited[i]:
            check[i] = (check[node] + 1) % 2
            dfs(i)
        elif check[node] == check[i]:
            is_even = False


for _ in range(N):
    v, e = map(int, input().split())
    A = [[] for _ in range(v + 1)]
    visited = [False] * (v + 1)
    check = [0] * (v + 1)
    is_even = True

    for i in range(e):
        s, e = map(int, input().split())
        A[s].append(e)
        A[e].append(s)

    for i in range(1, v + 1):
        if is_even:
            dfs(i)
        else:
            break

    if is_even:
        print("YES")
    else:
        print("NO")
