def solution(num_list, n):
    return [num_list[i * n : i * n + n] for i in range(len(num_list)//n)]