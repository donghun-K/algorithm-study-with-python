def solution(sides):
    return 1 + (max(sides) >= sum(sides) - max(sides))