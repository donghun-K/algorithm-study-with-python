def solution(num, total):
    return [
        i
        for i in range(
            (total // num - (num // 2 - (num % 2 == 0))),
            ((total // num + num // 2) + 1),
        )
    ]
