import sys

I = sys.stdin.readline

answer = 0
n, m = map(int, I().split())
nums = list(map(int, I().split()))
s_nums = [0] * n
counter = [0] * m
s_nums[0] = nums[0]

for i in range(1, n):
    s_nums[i] = s_nums[i - 1] + nums[i]

for i in range(n):
    remainder = s_nums[i] % m
    if remainder == 0:
        answer += 1
    counter[remainder] += 1

for i in range(m):
    if counter[i] > 1:
        answer += counter[i] * (counter[i] - 1) // 2

print(answer)
