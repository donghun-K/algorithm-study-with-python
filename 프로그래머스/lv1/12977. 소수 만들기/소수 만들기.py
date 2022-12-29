import itertools

def solution(nums):
    def is_prime(n):
        for i in range(2, int(n**0.5)+1):
            if n % i == 0:
                return False
        return True
        
    return len([1 for cb in itertools.combinations(nums, 3) if is_prime(sum(cb))])