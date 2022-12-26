def solution(num):
    answer = 0
    while answer < 500:
        if num == 1:
            return answer
        answer += 1
        num = num / 2 if num % 2 == 0 else num * 3 + 1        
    return -1