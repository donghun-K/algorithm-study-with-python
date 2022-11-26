import sys

input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))


def quick_sort(s, e, k):
    global A
    if s < e:
        pivot = partitions(s, e)
        if pivot == k:
            return
        elif k < pivot:
            quick_sort(s, pivot - 1, k)
        else:
            quick_sort(pivot + 1, e, k)


def swap(i, j):
    global A
    A[i], A[j] = A[j], A[i]


def partitions(s, e):
    global A
    if s + 1 == e:
        if A[s] > A[e]:
            swap(s, e)
        return e

    m = (s + e) // 2
    swap(s, m)
    pivot = A[s]
    i = s + 1
    j = e

    while i <= j:
        while pivot < A[j] and j > 0:
            j = j - 1
        while pivot > A[i] and i < len(A) - 1:
            i = i + 1

        if i <= j:
            swap(i, j)
            i = i + 1
            j = j - 1

    A[s] = A[j]
    A[j] = pivot

    return j


quick_sort(0, N - 1, K - 1)

print(A[K - 1])