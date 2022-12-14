def solution(my_string):
    return "".join(
        sorted(
            set([letter for letter in my_string]),
            key=lambda letter: my_string.index(letter),
        )
    )
