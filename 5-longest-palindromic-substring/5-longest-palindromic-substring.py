class Solution:
    def longestPalindrome(self, s: str) -> str:
        
        if len(s) == 1 or s == s[::-1]:
            return s
        
        def expand(left: int, right: int) -> str:
            while left >= 0 and right <= len(s) and s[left] == s[right - 1]:
                left -= 1
                right += 1
            return s[left + 1: right -1]
        
        words = []
        
        for i in range(0, len(s)-1):
            words.append(expand(i, i+1))
            words.append(expand(i, i+2))
        
        result = max(words, key=len)
        
        return result