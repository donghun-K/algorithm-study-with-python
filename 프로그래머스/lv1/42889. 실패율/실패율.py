def solution(N, stages):
    answer = []
    n_user = len(stages)
    r_failure = {}
    
    for i in range(1, N+1):
        if n_user != 0:
            n_failure = stages.count(i)
            r_failure[i] = n_failure / n_user
            n_user -= n_failure
        else:
            r_failure[i] = 0
            
    r_failure = sorted(r_failure.items(), key = lambda x : x[1], reverse = True)
    
    for item in r_failure:
        answer.append(item[0])
    
    return answer