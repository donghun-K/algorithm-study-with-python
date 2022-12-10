class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        # KeyError 방지
        anagrams = collections.defaultdict(list)
        
        for word in strs:
            anagrams[''.join(sorted(word))].append(word)
            
        return anagrams.values()