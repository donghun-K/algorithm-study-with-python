def solution(sizes):
    w = []
    h = []
    for s in sizes:
        w.append(min(s))
        h.append(max(s))
    return max(w) * max(h) 