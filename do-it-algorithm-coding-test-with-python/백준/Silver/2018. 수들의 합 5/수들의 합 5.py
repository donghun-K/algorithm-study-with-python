import sys

I = sys.stdin.readline

count = 1
start = 1
end = 1
sum = 1

n = int(I())

while end != n:
    if sum < n:
        end += 1
        sum += end
    elif sum > n:
        sum -= start
        start += 1
    elif sum == n:
        count += 1
        end += 1
        sum += end

print(count)