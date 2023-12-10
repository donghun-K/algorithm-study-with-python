function Heap(compare) {
  this._heap = [];
  this._compare = compare;
}

Heap.prototype.isEmpty = function () {
  return this._heap.length === 0;
};

Heap.prototype.push = function (el) {
  this._heap.push(el);
  this._heapifyUp();
};

Heap.prototype.pop = function () {
  if (this.isEmpty()) return null;
  this._swap(0, this._heap.length - 1);
  const returnValue = this._heap.pop();
  this._heapifyDown();
  return returnValue;
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
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (this._compare(this._heap[parentIndex], this._heap[currentIndex])) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    } else break;
  }
};

Heap.prototype._heapifyDown = function () {
  if (this.isEmpty()) return null;
  let currentIndex = 0;
  while (currentIndex < this._heap.length) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    let targetIndex = currentIndex;

    if (
      leftChildIndex <= this._heap.length - 1 &&
      this._compare(this._heap[targetIndex], this._heap[leftChildIndex])
    )
      targetIndex = leftChildIndex;

    if (
      rightChildIndex <= this._heap.length - 1 &&
      this._compare(this._heap[targetIndex], this._heap[rightChildIndex])
    )
      targetIndex = rightChildIndex;

    if (currentIndex === targetIndex) break;

    this._swap(currentIndex, targetIndex);
    currentIndex = targetIndex;
  }
};

function DualPriorityQueue(compare) {
  this._mode = 'MIN';
  this._minHeap = new Heap(compare);
  this._maxHeap = new Heap((a, b) => !compare(a, b));
}

DualPriorityQueue.prototype.push = function (el) {
  if (this._mode === 'MIN') this._minHeap.push(el);
  else this._maxHeap.push(el);
};

DualPriorityQueue.prototype.popMin = function () {
  this._mode = 'MIN';
  if (this._minHeap.isEmpty() && this._maxHeap.isEmpty()) return null;
  if (this._minHeap.isEmpty()) {
    while (!this._maxHeap.isEmpty()) {
      this._minHeap.push(this._maxHeap.pop());
    }
  }
  return this._minHeap.pop();
};

DualPriorityQueue.prototype.popMax = function () {
  this._mode = 'MAX';
  if (this._minHeap.isEmpty() && this._maxHeap.isEmpty()) return null;
  if (this._maxHeap.isEmpty()) {
    while (!this._minHeap.isEmpty()) {
      this._maxHeap.push(this._minHeap.pop());
    }
  }
  return this._maxHeap.pop();
};

function solution(operations) {
  const dpq = new DualPriorityQueue((a, b) => a > b);
  operations.forEach((operation) => {
    const [operator, value] = operation.split(' ');

    if (operator === 'I') {
      dpq.push(Number(value));
    } else {
      if (value === '1') {
        dpq.popMax();
      } else {
        dpq.popMin();
      }
    }
  });

  let max = dpq.popMax() ?? 0;
  let min = dpq.popMin() ?? max;

  
  return [max, min];
}
