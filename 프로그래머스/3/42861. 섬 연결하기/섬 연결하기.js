function Heap(compare) {
  this._heap = [];
  this._compare = compare;
}

Heap.prototype.isEmpty = function () {
  return this._heap.length === 0;
};

Heap.prototype._swap = function (index1, index2) {
  [this._heap[index1], this._heap[index2]] = [
    this._heap[index2],
    this._heap[index1],
  ];
};

Heap.prototype.push = function (el) {
  this._heap.push(el);
  this._heapifyUp();
};

Heap.prototype.pop = function () {
  if (this.isEmpty()) return null;
  if (this._heap.length > 1) this._swap(0, this._heap.length - 1);

  const result = this._heap.pop();

  if (this._heap.length > 1) this._heapifyDown();

  return result;
};

Heap.prototype._heapifyUp = function () {
  let currentIndex = this._heap.length - 1;
  while (currentIndex > 0) {
    const parentIndex = parseInt((currentIndex - 1) / 2);
    if (this._compare(this._heap[currentIndex], this._heap[parentIndex])) break;
    this._swap(currentIndex, parentIndex);
    currentIndex = parentIndex;
  }
};

Heap.prototype._heapifyDown = function () {
  let currentIndex = 0;

  while (currentIndex < this._heap.length - 1) {
    let targetIndex = currentIndex;
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;

    if (
      leftChildIndex <= this._heap.length - 1 &&
      !this._compare(this._heap[leftChildIndex], this._heap[targetIndex])
    )
      targetIndex = leftChildIndex;

    if (
      rightChildIndex <= this._heap.length - 1 &&
      !this._compare(this._heap[rightChildIndex], this._heap[targetIndex])
    )
      targetIndex = rightChildIndex;

    if (targetIndex === currentIndex) break;

    this._swap(currentIndex, targetIndex);
    currentIndex = targetIndex;
  }
};

function solution(n, costs) {
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }

  for (const [v1, v2, cost] of costs) {
    graph[v1].push([v2, cost]);
    graph[v2].push([v1, cost]);
  }

  const heap = new Heap((next, prev) => next[1] > prev[1]);
  const visited = Array(n).fill(false);
  for (const [v, cost] of graph[0]) {
    heap.push([v, cost]);
  }
  visited[0] = true;
  let total = 0;
  while (visited.includes(false)) {
    const [current, cost] = heap.pop();
    if (visited[current]) continue;
    total += cost;
    visited[current] = true;
    for (const [next, cost] of graph[current]) {
      if (visited[next]) continue;
      heap.push([next, cost]);
    }
  }
  

  return total;
}
