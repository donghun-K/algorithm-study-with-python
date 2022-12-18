def solution(n):
    def check(n):
        while n != 0:
            if n % 10 == 3:
                return True
            n //= 10
        return False
    
    answer = 0
    for i in range(1, n+1):
        answer += 1
        while answer % 3 == 0 or check(answer):
            answer += 1
    return answer