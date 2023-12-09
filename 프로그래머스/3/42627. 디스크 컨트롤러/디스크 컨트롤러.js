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
  this._swap(0, this._heap.length - 1);
  const lastEl = this._heap.pop();
  this._heapifyDown();

  return lastEl;
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
  if (this.isEmpty()) return;
  let currentIndex = 0;

  while (currentIndex < this._heap.length) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    let targetIndex = currentIndex;

    if (
      leftChildIndex <= this._heap.length - 1 &&
      this._compare(this._heap[targetIndex], this._heap[leftChildIndex])
    ) {
      targetIndex = leftChildIndex;
    }
    if (
      rightChildIndex <= this._heap.length - 1 &&
      this._compare(this._heap[targetIndex], this._heap[rightChildIndex])
    ) {
      targetIndex = rightChildIndex;
    }

    if (targetIndex === currentIndex) break;
    this._swap(targetIndex, currentIndex);
    currentIndex = targetIndex;
  }
};

function solution(jobs) {
  let total = 0;
  let time = -1;

  const jobArray = [...jobs].sort((a, b) => a[0] - b[0]);
  const jobQueue = new Heap((a, b) => a[1] > b[1]);
  let currentJob = null;

  while (currentJob || jobArray.length > 0 || !jobQueue.isEmpty()) {
    time++;
    
    while (jobArray.length > 0 && jobArray[0][0] <= time) {
      jobQueue.push(jobArray.shift());
    }

    if (!currentJob) currentJob = jobQueue.pop();
    else {
      currentJob[1]--;
      if (currentJob[1] === 0) {
        total += time - currentJob[0];
        currentJob = jobQueue.pop();
      }
    }
  }

  return Math.floor(total / jobs.length);
}
