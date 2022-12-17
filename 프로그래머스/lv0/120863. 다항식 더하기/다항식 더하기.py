def solution(polynomial):
    terms = polynomial.split(" + ")
    x_c = 0
    consts = 0

    for term in terms:
        if "x" in term:
            c = term.replace("x", "")
            if c == "":
                c = 1
            else:
                c = int(c)
            x_c += c
        else:
            consts += int(term)
    answer = ""
    if x_c:
        if x_c == 1:
            answer = "x"
        else:
            answer = f"{x_c}x"
        if consts:
            answer = answer + " + "
    if consts:
        answer = answer + str(consts)
    return answer
