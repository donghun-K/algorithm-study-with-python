def solution(dartResult):
    answer = 0
    
    l_score = []

    for i in range(len(dartResult)):      
        if dartResult[i] in ['S', 'D', 'T', '*', '#']:
            if dartResult[i] == 'S':
                l_score[len(l_score) - 1] = l_score[len(l_score) - 1] ** 1
            elif dartResult[i] == 'D':
                l_score[len(l_score) - 1] = l_score[len(l_score) - 1] ** 2
            elif dartResult[i] == 'T':
                l_score[len(l_score) - 1] = l_score[len(l_score) - 1] ** 3
            elif dartResult[i] == '*':
                l_score[len(l_score) - 1] = l_score[len(l_score) - 1] * 2
                if len(l_score) - 1 != 0:
                    l_score[len(l_score) - 2] = l_score[len(l_score) - 2] * 2
            else:                
                l_score[len(l_score) - 1] = l_score[len(l_score) - 1] * -1        
        else:
            if dartResult[i] + dartResult[i+1] == '10':
                continue
            if i != 0 and dartResult[i - 1] + dartResult[i] == '10':
                l_score.append(10)
            else:
                l_score.append(int(dartResult[i]))
    
    for i in l_score:
        answer += i
    
    return answer