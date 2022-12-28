def solution(s):
    return " ".join(
        "".join([c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(word)])
        for word in s.split(" ")
    )