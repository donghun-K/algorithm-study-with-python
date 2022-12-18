def solution(lines):
    l = [0 for _ in range(201)]
    count = 0
    
    for line in lines:
        for i in range(line[0], line[1]):
            l[i+100] += 1
            
    for i in l:
        if i > 1:
            count += 1
            
    return count