def solution(common):
    n = len(common) - 1
    if common[2] - common[1] == common[1] - common[0]:
        return common[n] + common[n] - common[n - 1]
    else:
        return common[n] * common[n] / common[n - 1]