def solution(sides):
    return 1 + (sorted(sides)[2] >= sorted(sides)[0] + sorted(sides)[1])
