def solution(dots):        
    def check(p1, p2, p3, p4):        
        a = (p1[1] - p2[1]) / (p1[0] - p2[0])
        b = (p3[1] - p4[1]) / (p3[0] - p4[0])
        return a == b
    if check(dots[0], dots[1], dots[2], dots[3]) or check(dots[0], dots[2], dots[1], dots[3]) or check(dots[0], dots[3], dots[1], dots[2]):
        return 1
    return 0
    