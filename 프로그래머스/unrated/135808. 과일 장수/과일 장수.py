def solution(k, m, score):
    score.sort(reverse=True)
    return sum([min(score[i : i + m]) * m for i in range(0, len(score) - m + 1, m)])
