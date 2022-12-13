def solution(my_string):
    return sorted([int(l) for l in my_string if str.isdigit(l)])