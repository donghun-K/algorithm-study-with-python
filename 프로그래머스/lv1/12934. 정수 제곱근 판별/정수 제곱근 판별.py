import math

def solution(n):
    return (math.sqrt(n) + 1) ** 2 if math.sqrt(n) == math.sqrt(n) // 1 else -1
