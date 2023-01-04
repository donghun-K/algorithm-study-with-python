def solution(survey, choices):
    type = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}
    for t, s in zip(survey, choices):
        score = s - 4
        type[t[score > 0]] += abs(score)
    answer = ''
    for a, b in (('R', 'T'), ('C', 'F'), ('J', 'M'), ('A', 'N')):
        if type[a] >= type[b]:
            answer += a
        else:
            answer += b
    return answer