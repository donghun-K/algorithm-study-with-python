def solution(num, total):
    if num % 2 == 0:
        n = total // num
        return [i for i in range((n - (num // 2 - 1)), ((n + num // 2) + 1))]
    else:
        n = total // num
        return [i for i in range((n - num // 2), n + num // 2 + 1)]