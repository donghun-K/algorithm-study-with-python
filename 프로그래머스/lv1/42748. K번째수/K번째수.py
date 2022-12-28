def solution(array, commands):
    answer = []
    
    for item in commands:
        i, j, k = item
        temp = array[i-1:j]
        temp.sort()
        answer.append(temp[k-1])         
    
    return answer