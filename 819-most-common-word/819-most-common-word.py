class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
                
        words = re.sub('[^\w]', ' ', paragraph).lower().split()
        
        for ban_word in banned:
            while ban_word in words:
                words.remove(ban_word)                
            
        counts = collections.Counter(words)
        
        return counts.most_common(1)[0][0]
            