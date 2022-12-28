def solution(n, arr1, arr2):
    answer = []
    for i, j in zip(arr1, arr2):
        l = str(bin(i | j)[2:])
        l = l.rjust(n, "0")
        l = l.replace("1", "#")
        l = l.replace("0", " ")
        answer.append(l)
    return answer