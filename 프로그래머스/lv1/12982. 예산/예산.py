def solution(d, budget):
    answer = 0
    support = 0
    d.sort()
    
    for i in d:
        if support + i <= budget:
            support += i
            answer += 1
        else:
            break
    
    return answer