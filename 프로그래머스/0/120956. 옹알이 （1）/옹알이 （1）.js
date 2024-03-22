function solution(babbling) {
    return babbling.filter(word => {
        return word.replace('aya', ' ').replace('ye', ' ').replace('woo', ' ').replace('ma', ' ').trim() === '';
    }).length;
}