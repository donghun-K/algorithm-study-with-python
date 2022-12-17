def solution(numbers):
    pos = []
    neg = []
    zero = False
    for num in numbers:
        if num > 0:
            pos.append(num)
        elif num < 0:
            neg.append(num)
        else:
            zero = True

    pos.sort(reverse=True)
    neg.sort()

    if len(pos) >= 2 and len(neg) >= 2:
        return max(pos[0] * pos[1], neg[0] * neg[1])

    if len(pos) >= 2:
        return pos[0] * pos[1]

    if len(neg) >= 2:
        return neg[0] * neg[1]

    if zero:
        return 0

    return neg[-1] * pos[-1]