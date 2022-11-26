import sys
I = sys.stdin.readline

n, q = map(int, I().split())
number_list = list(map(int, I().split()))
prefix_sum_list = [0]
temp = 0

for i in range(n):
    temp = number_list[i] + prefix_sum_list[i]
    prefix_sum_list.append(temp)

for _ in range(q):
    start, end = map(int, I().split())
    print(prefix_sum_list[end] - prefix_sum_list[start-1])