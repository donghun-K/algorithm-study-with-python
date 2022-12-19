def solution(score):
    avg = [e + m for e, m in score]
    sorted_avg = sorted(avg, reverse=True)

    return [sorted_avg.index(s) + 1 for s in avg]
