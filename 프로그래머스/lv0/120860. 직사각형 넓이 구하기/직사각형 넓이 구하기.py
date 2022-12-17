def solution(dots):
    s_dots = sorted(dots)
    return (s_dots[0][1] - s_dots[1][1]) * (s_dots[0][0] - s_dots[2][0])