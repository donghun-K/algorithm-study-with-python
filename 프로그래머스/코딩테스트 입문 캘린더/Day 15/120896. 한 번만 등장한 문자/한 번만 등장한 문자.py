from collections import Counter

def solution(s):
    answer = ''
    counter = Counter(sorted(list(s)))
    for key in counter:
        if counter[key] == 1:
            answer = answer + key
    return answer