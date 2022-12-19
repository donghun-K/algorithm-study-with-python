def solution(numlist, n):
    dv = []
    for num in numlist:
        dv.append((abs(num - n), -num))
    dv.sort()
    return [-v for d, v in dv]