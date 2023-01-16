def solution(phone_book):
    phones = sorted(phone_book)
    for i in range(len(phones) - 1):
        if phones[i] == phones[i + 1][: len(phones[i])]:
            return False
    return True
