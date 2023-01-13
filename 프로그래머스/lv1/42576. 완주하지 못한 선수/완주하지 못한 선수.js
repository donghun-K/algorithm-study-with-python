function solution(participant, completion) {
    const counter = {}
    participant.forEach(name=>{
        if (counter[name] !== undefined) {
            counter[name] += 1
        } else {
            counter[name] = 1;
        }        
    })
    completion.forEach(name=>{
        counter[name] -= 1
    })
    let answer;
    Object.keys(counter).forEach(name=>{
        if (counter[name] === 1) {
            answer = name
        }
    })
    return answer
}