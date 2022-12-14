def solution(array, n):
    return sorted([((x-n)**2, x) for x in array])[0][1]