function solution(spell, dic) {
  let str = spell.sort().join('');
  for (let i = 0; i < dic.length; i++) {
    if ([...dic[i]].sort().join('') === str) return 1;
  }
  return 2;
}

