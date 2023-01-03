def solution(s):
    def sep(string):
        f_letter = string[0]
        count_x = count_nx = 0
        for i, c in enumerate(string):
            if c == f_letter:
                count_x += 1
            else:
                count_nx += 1
            if count_x == count_nx:
                return string[i+1:]
    answer = 0
    while s:
        s = sep(s)
        answer += 1
            
    return answer