def solution(my_string):
    return sum([int(l) for l in my_string if str.isdigit(l)])