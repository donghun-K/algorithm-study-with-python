from itertools import combinations


def solution(dots):
    ds = []
    for (x1, y1), (x2, y2) in combinations(dots, 2):
        ds.append((y2 - y1, x2 - x1))
    for (x1, y1), (x2, y2) in combinations(ds, 2):
        if x1 / x2 == y1 / y2:
            return 1
    return 0
