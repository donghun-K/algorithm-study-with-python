def solution(my_string):
    s = list(reversed([e for e in my_string.split()]))
    answer = int(s.pop())
    while s:  
        e = s.pop()        
        if e == '+':
            answer += int(s.pop())
        if e == '-':
            answer -= int(s.pop())
    return answer