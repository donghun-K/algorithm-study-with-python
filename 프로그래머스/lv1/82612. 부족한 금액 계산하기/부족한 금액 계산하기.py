def solution(price, money, count):
    return max(0, -(money - sum(i * price for i in range(1, count + 1))))
