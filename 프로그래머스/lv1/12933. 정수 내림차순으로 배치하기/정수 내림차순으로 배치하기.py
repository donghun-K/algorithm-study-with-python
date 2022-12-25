def solution(n):
    return int("".join(list(sorted(str(n), reverse=True))))
