function solution(n, words) {
  const check = {};
  const players = [];
  let current = '';
  let prev = ''
  for (let i = 0; i < n; i++) {
    players.push([]);
  }
  
  for (let i = 0; i < words.length; i++) {
    let turn = i % n;
    current = words[i];
    if (i !== 0) {
        if (prev.slice(-1) !== current[0] || check[current]) {
            return [turn + 1, parseInt(i / n) + 1]
        }
    }    
    check[current] = true;
    players[turn].push(current);
    prev = current;
  }
  return [0, 0];
}