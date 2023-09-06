n = int(input())

for _ in range(n):
    m = int(input())
    isValid = True
    for i in range(2, 1000001):
        if m % i == 0:
            print("NO")
            break
        if i == 1000000:
            print("YES")