def solution(array):
    return sorted([[v, i] for i, v in enumerate(array)], reverse=True)[0]
