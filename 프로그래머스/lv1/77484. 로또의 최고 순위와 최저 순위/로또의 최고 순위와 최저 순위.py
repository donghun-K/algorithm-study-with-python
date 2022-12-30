def solution(lottos, win_nums):    
    count_unknown = 0
    count_right = 0
    
    for i in lottos:
        if i == 0:
            count_unknown += 1
        elif i in win_nums:
            count_right += 1
    
    best = min(7 - count_right - count_unknown, 6)
    worst = min(7 - count_right, 6)   
    
    return [best, worst]