from collections import Counter


def solution(X, Y):
    l = []
    c_x, c_y = Counter(X), Counter(Y)
    for i in range(10):
        key = str(i)
        while c_x[key] and c_y[key]:
            l.append(key)
            c_x[key] -= 1
            c_y[key] -= 1

    answer = "".join(sorted(l, reverse=True))

    if len(answer) == 0:
        return "-1"
    if answer[0] == "0":
        return "0"
    return answer
