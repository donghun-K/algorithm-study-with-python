def solution(s):
    stack = []
    for e in s.split():
        if e == 'Z':
            stack.pop()
        else:
            stack.append(int(e))
    return sum(stack)