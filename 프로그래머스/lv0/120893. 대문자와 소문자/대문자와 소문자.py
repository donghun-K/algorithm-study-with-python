def solution(my_string):
    return ''.join([letter.lower() if letter.isupper() else letter.upper() for letter in my_string])