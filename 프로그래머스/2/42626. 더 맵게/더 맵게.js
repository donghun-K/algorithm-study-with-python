function Heap(comparator) {
  this._comparator = comparator;
  this._heap = [];
}

Heap.prototype.getSize = function () {
  return this._heap.length;
};

Heap.prototype.getElementByIndex = function (i) {
  return this._heap[i];
};

Heap.prototype.isEmpty = function () {
  return this._heap.length === 0;
};

Heap.prototype.push = function (el) {
  this._heap.push(el);
  this._heapifyUp();
};

Heap.prototype.pop = function () {
  if (this.isEmpty()) return;

  this._swap(0, this._heap.length - 1);
  const el = this._heap.pop();

  this._heapifyDown();
  return el;
};

Heap.prototype._swap = function (index1, index2) {
  [this._heap[index1], this._heap[index2]] = [
    this._heap[index2],
    this._heap[index1],
  ];
};

Heap.prototype._heapifyUp = function () {
  let currentIndex = this._heap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    if (this._comparator(this._heap[parentIndex], this._heap[currentIndex])) {
      this._swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    } else break;
  }
};

Heap.prototype._heapifyDown = function () {
  if (this.isEmpty()) return;
  let currentIndex = 0;

  while (currentIndex < this._heap.length) {
    let targetIndex = currentIndex;
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex = currentIndex * 2 + 2;

    if (
      leftChildIndex <= this._heap.length &&
      this._comparator(this._heap[targetIndex], this._heap[leftChildIndex])
    )
      targetIndex = leftChildIndex;
    if (
      rightChildIndex <= this._heap.length &&
      this._comparator(this._heap[targetIndex], this._heap[rightChildIndex])
    )
      targetIndex = rightChildIndex;

    if (targetIndex === currentIndex) break;
    this._swap(targetIndex, currentIndex);
    currentIndex = targetIndex;
  }
};

function solution(scoville, K) {
  let count = 0;
  const minHeap = new Heap((a, b) => a > b);
  scoville.forEach((n) => {
    minHeap.push(n);
  });

  while (minHeap.getSize() >= 2 && minHeap.getElementByIndex(0) < K) {
    const n = minHeap.pop();
    const m = minHeap.pop();
    minHeap.push(n + 2 * m);
    count++;
  }

  return minHeap.getElementByIndex(0) < K ? -1 : count;
}
