def solution(A, B):
    count = 0
    if A == B:
        return 0
    for _ in range(len(A)):
        A = A[-1:] + A[:-1]
        count += 1
        if A == B:
            return count
    return -1