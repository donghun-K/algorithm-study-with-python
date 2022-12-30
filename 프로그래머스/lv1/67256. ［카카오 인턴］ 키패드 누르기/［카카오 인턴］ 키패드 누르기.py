def solution(numbers, hand):
    answer = ''
    key_pad = {}
    
    for i in range(4):
        for j in range(3):
            key_pad[(i*3)+j+1] = [j+1, 4-i]
        
    key_pad[0] = [2, 1]
    
    l_thumb = [1, 1]
    r_thumb = [3, 1]
    
    for i in numbers:
        if i in [1, 4, 7]:
            answer = answer + 'L'
            l_thumb = key_pad[i]
        elif i in [3, 6, 9]:
            answer = answer + 'R'
            r_thumb = key_pad[i]
        else:
            l_dis =  abs(l_thumb[0] - key_pad[i][0]) + abs(l_thumb[1] - key_pad[i][1])
            r_dis =  abs(r_thumb[0] - key_pad[i][0]) + abs(r_thumb[1] - key_pad[i][1])
            
            if l_dis < r_dis:
                answer = answer + 'L'
                l_thumb = key_pad[i]
            elif r_dis < l_dis:
                answer = answer + 'R'
                r_thumb = key_pad[i]
            else:
                if hand == 'left':
                    answer = answer + 'L'
                    l_thumb = key_pad[i]
                else:
                    answer = answer + 'R'
                    r_thumb = key_pad[i]
                
    return answer