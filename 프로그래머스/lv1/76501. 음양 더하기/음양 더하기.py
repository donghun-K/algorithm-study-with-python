def solution(absolutes, signs):
    return sum([absolutes[i] * (signs[i] or -1) for i in range(len(signs))])
