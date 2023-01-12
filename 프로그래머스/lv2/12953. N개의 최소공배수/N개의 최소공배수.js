function solution(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let gcd = 0;
  for (let i=0; i<arr.length-1; i++){
    gcd = getGCD(arr[i], arr[i+1])
    arr[i+1] = arr[i] * arr[i+1] / gcd
  }
  return arr[arr.length-1]
}

function getGCD(num1, num2) {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num1;
}

function getGCD(num1, num2) {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num1;
}