def solution(age):
    return "".join(chr(int(digit) + 97) for digit in str(age))
