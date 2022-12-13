import math

def solution(n):
    def is_prime(num):
        for i in range(2, int(math.sqrt(num))+1):
            if num % i == 0:
                return False
        return True
    
    return len([i for i in range(4, n+1) if not is_prime(i)])