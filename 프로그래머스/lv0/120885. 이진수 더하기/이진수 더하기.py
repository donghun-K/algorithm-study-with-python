def solution(bin1, bin2):
    l1 = list(int(b) for b in bin1)
    l2 = list(int(b) for b in bin2)
    temp = 0
    result = []
    while l1 or l2:      
        sum = temp
        if l1: 
            sum += l1.pop()
        if l2:
            sum += l2.pop()
        temp, v = divmod(sum, 2)
        result.append(str(v))
    result = result + l1
    result = result + l2
    if temp:
        result.append('1')
    
    result.reverse()
    
    return ''.join(result)