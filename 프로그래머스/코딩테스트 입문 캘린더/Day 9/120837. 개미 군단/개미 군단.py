def solution(hp):
    answer = 0
    for i in [5, 3]:
        temp, hp = divmod(hp, i)
        answer += temp
    answer += hp
    return answer
