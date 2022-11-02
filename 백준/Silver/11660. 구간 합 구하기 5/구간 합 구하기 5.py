import sys

I = sys.stdin.readline

n, q = map(int, I().split())
m = [[0] * (n + 1)]
p_s_m = [[0] * (n + 1) for _ in range(n + 1)]

for _ in range(n):
    row = [0] + [int(x) for x in input().split()]
    m.append(row)

for row in range(1, n + 1):
    for col in range(1, n + 1):
        p_s_m[row][col] = (
            p_s_m[row - 1][col]
            + p_s_m[row][col - 1]
            - p_s_m[row - 1][col - 1]
            + m[row][col]
        )

for _ in range(q):
    x1, y1, x2, y2 = map(int, I().split())
    result = (
        p_s_m[x2][y2] - p_s_m[x1 - 1][y2] - p_s_m[x2][y1 - 1] + p_s_m[x1 - 1][y1 - 1]
    )
    print(result)