function solution(numbers) {
  const nums = numbers.split('');
  const result = new Set();

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= num ** 0.5; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function recur(n, arr) {
    if (n !== null) result.add(Number(n));
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.filter((_, j) => i !== j);
      recur((n ?? '') + String(arr[i]), newArr);
    }
  }

  recur(null, [...nums]);
  console.log(Array.from(result).filter((n) => isPrime(n)))
  return Array.from(result).filter((n) => isPrime(n)).length;
}
