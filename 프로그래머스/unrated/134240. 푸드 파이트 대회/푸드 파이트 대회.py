def solution(food):
    s = ''.join(str(i) * (food[i]//2) for i in range(len(food)))
    return s + '0' + s[::-1]