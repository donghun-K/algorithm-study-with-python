import sys

I = sys.stdin.readline

check_list = [0] * 4
my_list = [0] * 4
checked = 0


def add_c(c):
    global check_list, my_list, checked
    if c == "A":
        my_list[0] += 1
        if my_list[0] == check_list[0]:
            checked += 1
    elif c == "C":
        my_list[1] += 1
        if my_list[1] == check_list[1]:
            checked += 1
    elif c == "G":
        my_list[2] += 1
        if my_list[2] == check_list[2]:
            checked += 1
    elif c == "T":
        my_list[3] += 1
        if my_list[3] == check_list[3]:
            checked += 1


def remove_c(c):
    global check_list, my_list, checked
    if c == "A":
        if my_list[0] == check_list[0]:
            checked -= 1
        my_list[0] -= 1
    elif c == "C":
        if my_list[1] == check_list[1]:
            checked -= 1
        my_list[1] -= 1
    elif c == "G":
        if my_list[2] == check_list[2]:
            checked -= 1
        my_list[2] -= 1
    elif c == "T":
        if my_list[3] == check_list[3]:
            checked -= 1
        my_list[3] -= 1


S, P = map(int, input().split())
result = 0
A = list(I())
check_list = list(map(int, I().split()))

for i in range(4):
    if check_list[i] == 0:
        checked += 1

for i in range(P):
    add_c(A[i])

if checked == 4:
    result += 1

for i in range(P, S):
    j = i - P
    add_c(A[i])
    remove_c(A[j])
    if checked == 4:
        result += 1

print(result)
