def solution(s, n):
    answer = ''
    
    for i in s:
        a = 32
        if i != ' ':
            a = ord(i)

            if a > 96:
                a += n
                if a > 122:
                    a -= 26
            else:
                a += n
                if a > 90:
                    a -= 26
                
        answer = answer + chr(a)
    
    return answer