import sys

I = sys.stdin.readline

n = int(I())
nums = list(map(int, I().split()))
nums.sort()

count = 0

for k in range(n):
    o = nums[k]
    l = 0
    r = n - 1
    while l < r:
        sum = nums[l] + nums[r]
        if sum == nums[k]:
            if l != k and r != k:
                count += 1
                break
            elif l == k:
                l += 1
            elif r == k:
                r -= 1
        elif sum < nums[k]:
            l += 1
        elif sum > nums[k]:
            r -= 1

print(count)
