def solution(n):
    prime = 2
    answer = set([])
    while n > 0:
        if n == prime:
            answer.add(prime)
            break
        elif n % prime == 0:
            answer.add(prime)
            n /= prime
        else:
            prime += 1
    return sorted(list(answer))