def solution(n):
    return int("".join(digit for digit in sorted(str(n), reverse=True)))
