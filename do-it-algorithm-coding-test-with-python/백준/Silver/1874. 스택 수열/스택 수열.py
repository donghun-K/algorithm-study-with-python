import sys

I = sys.stdin.readline

n = int(I())
A = [0] * n

for i in range(n):
    A[i] = int(I())

answer = ""
stack = []
num = 1
is_possible = True

for i in range(n):
    o = A[i]

    if num <= o:
        while num <= o:
            stack.append(num)
            answer += "+\n"
            num += 1
        stack.pop()
        answer += "-\n"
    else:
        n = stack.pop()
        if n > o:
            print("NO")
            is_possible = False
            break
        else:
            answer += "-\n"


if is_possible:
    print(answer)