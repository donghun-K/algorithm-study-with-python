def solution(slice, n):
    n_slice =  n // slice
    if n % slice != 0:
        n_slice += 1
    return n_slice