function solution(n) {
    const answer = [];
    
    function recursive(x, from, to, mid) {
        if (x === 0) return;
        recursive(x-1, from, mid, to);
        answer.push([from, to]);
        recursive(x-1, mid, to, from)
    }
    
    recursive(n, 1, 3, 2)
    
    return answer;
}