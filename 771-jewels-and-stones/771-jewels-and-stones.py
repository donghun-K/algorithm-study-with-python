class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        dict = collections.Counter(stones)
        count = 0
        
        for char in jewels:
            count += dict[char]
            
        return count