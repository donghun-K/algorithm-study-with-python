class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqs = collections.Counter(nums)
        heap = []
        result = []
        for f in freqs:
            heapq.heappush(heap, (-freqs[f], f))           
        for _ in range(k):
            result.append(heapq.heappop(heap)[1])
                
        return result