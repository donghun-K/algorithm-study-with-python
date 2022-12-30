from collections import defaultdict


def solution(s):
    dic = defaultdict(int)
    answer = []
    for i, c in enumerate(s):
        answer.append(-1) if dic[c] == 0 else answer.append(i + 1 - dic[c])
        dic[c] = i + 1
    return answer