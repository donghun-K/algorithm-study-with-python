def solution(a, b, n):
    answer = 0
    rm = 0
    while (rm + n) >= a: 
        n, rm = divmod((rm + n), a)
        n *= b
        answer += n
    return answer