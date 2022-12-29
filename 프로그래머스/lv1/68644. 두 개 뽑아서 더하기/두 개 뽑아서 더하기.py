def solution(numbers):
    answer = []
    p_list = []
    p_set = ()
    
    n = len(numbers)
    
    for i in range(n-1):
        for j in range(i + 1, n):
            p_list.append(numbers[i] + numbers[j])
            
    p_set = set(p_list)
    p_list = list(p_set)
    
    answer = sorted(p_list)   
            
    return answer