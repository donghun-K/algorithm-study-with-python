def solution(spell, dic):
    spell = set(spell)
    for word in dic:
        if spell == set(word):
            return 1    
    return 2