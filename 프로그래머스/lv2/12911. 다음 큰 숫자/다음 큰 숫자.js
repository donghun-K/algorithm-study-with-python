function solution(n) {
    const nOne = n.toString(2).split('1').length
    let answer = n + 1;
    while (! (answer.toString(2).split('1').length === nOne)) {
        answer++;
    }
    return answer;
}