def solution(my_string):
    answer = 0
    temp = ""
    for e in my_string:
        if e.isdigit():
            temp = temp + e
        elif temp != "":
            answer += int(temp)
            temp = ""
    if temp != "":
        answer += int(temp)
    return answer
