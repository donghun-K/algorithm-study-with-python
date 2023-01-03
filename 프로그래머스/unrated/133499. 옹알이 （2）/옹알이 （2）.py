def solution(babbling):
    count = 0
    words = ["aya", "ye", "woo", "ma"]
    for s in babbling:
        for word in words:
            if word * 2 in s:
                continue
            s = s.replace(word, " ")
        if s.strip() == "":
            count += 1

    return count

