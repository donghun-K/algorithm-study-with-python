function solution(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return count;
    }
    count++;
    let arrA = A.split('');
    A = [arrA.pop(), ...arrA].join('');
  }
  return -1;
}
