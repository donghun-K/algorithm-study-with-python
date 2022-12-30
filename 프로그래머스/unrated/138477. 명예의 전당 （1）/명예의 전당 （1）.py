from heapq import heappush, heappop

def solution(k, score):
    answer = []
    heap = []
    for sc in score[:k]:
        heappush(heap, sc)
        answer.append(heap[0])
    min_score = min(heap)
    for sc in score[k:]:
        if sc > min_score:
            heappush(heap, sc)
            heappop(heap)
        answer.append(heap[0])
    return answer