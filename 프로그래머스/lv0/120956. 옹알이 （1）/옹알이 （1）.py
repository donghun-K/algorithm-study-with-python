def solution(babbling):
    return len(
        [
            s
            for s in babbling
            if s.replace("aya", " ")
            .replace("ye", " ")
            .replace("woo", " ")
            .replace("ma", " ")
            .strip()
            == ""
        ]
    )
