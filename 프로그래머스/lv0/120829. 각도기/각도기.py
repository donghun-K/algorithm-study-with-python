def solution(angle):
    q, r = divmod(angle, 90)
    q *= 2
    if r:
        q +=1
    return q