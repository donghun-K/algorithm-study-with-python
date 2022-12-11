import math
def solution(n):   
    return len([i for i in range(1, int(math.sqrt(n)) +1) if n % i == 0 ]) * 2 - (math.sqrt(n) == math.sqrt(n)//1)