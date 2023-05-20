function solution(order) {
  return [...order.toString()].filter((v) => ['3', '6', '9'].includes(v))
    .length;
}