def solution(ingredient):
    answer = 0
    idx = 0
    while idx < len(ingredient) - 3:
        if ingredient[idx] == 1:
            if ingredient[idx : idx + 4] == [1, 2, 3, 1]:
                del ingredient[idx : idx + 4]
                answer += 1
                idx = idx - 3
                continue
        idx += 1
    return answer
