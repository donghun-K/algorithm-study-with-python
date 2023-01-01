def solution(new_id):
    answer = ''
    l = ['~', '!', '@', '#', '$', '%','^', '&', '*', '(', ')', '=', '+', '[', '{', ']', '}', ':', '?', ',', '<', '>', '/']
    
    # 1단계
    new_id = new_id.lower() 
    
    # 2단계
    for i in l:
        new_id = new_id.replace(i, '')
    
    # 3단계
    while '..' in new_id: 
        new_id = new_id.replace('..', '.')
    
    # 문자열 > 리스트로 변환
    new_id = list(new_id)
    
    # 4단계    
    if len(new_id) >= 1 and new_id[0] == '.':
        del new_id[0]
    if len(new_id) >= 1 and new_id[len(new_id)-1] == '.':
        del new_id[len(new_id)-1]
        
    # 5단계
    if len(new_id) == 0:
        new_id.append('a')
        
    # 6단계
    if len(new_id) >= 16:
        new_id =  new_id[0:15]
        if new_id[len(new_id)-1] == '.':
            del new_id[len(new_id)-1]
    
    # 7단계
    while len(new_id) <= 2:
        new_id.append(new_id[len(new_id)-1])
        
    for i in new_id:        
        answer = answer + i      
        
    return answer