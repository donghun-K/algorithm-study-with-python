def solution(board):
    around = [
        (-1, -1),
        (-1, 0),
        (-1, 1),
        (0, -1),
        (0, 0),
        (0, 1),
        (1, -1),
        (1, 0),
        (1, 1),
    ]
    count = 0
    n = len(board)
    check = [[True] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if board[i][j]:
                for p in around:
                    if 0 <= i + p[0] < n and 0 <= j + p[1] < n:
                        check[i + p[0]][j + p[1]] = False
    for i in range(n):
        for j in range(n):
            if check[i][j]:
                count += 1
    return count
