def solution(arr, divisor):
    ans = sorted([n for n in arr if n % divisor == 0])
    return ans if ans else [-1]