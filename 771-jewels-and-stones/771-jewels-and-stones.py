class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        dict = collections.defaultdict(int)
        
        for char in stones:
            dict[char] += 1
            
        sum = 0
        
        for char in jewels:
            sum += dict[char]
            
        return sum