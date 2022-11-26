import sys

input = sys.stdin.readline
A = list(map(str, input().split("-")))

answer = 0


def my_sum(s):
    sum = 0
    temp = s.split("+")
    for i in temp:
        sum += int(i)
    return sum


for i in range(len(A)):
    temp = my_sum(A[i])
    if i == 0:
        answer += temp
    else:
        answer -= temp

print(answer)