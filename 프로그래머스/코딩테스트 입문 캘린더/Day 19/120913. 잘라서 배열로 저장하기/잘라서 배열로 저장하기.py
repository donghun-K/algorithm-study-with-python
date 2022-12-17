def solution(my_str, n):
    start = 0
    answer = []
    while start < len(my_str):
        answer.append(my_str[start : start + n])
        start += n
    return answer
