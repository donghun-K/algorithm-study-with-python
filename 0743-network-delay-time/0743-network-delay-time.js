function Heap(comparator) {
  this._comparator = comparator;
  this._elements = [];
}

Heap.prototype.isEmpty = function () {
  return this._elements.length === 0;
};

Heap.prototype.push = function (value) {
  this._elements.push(value);
  this.heapifyUp();
};

Heap.prototype.pop = function () {
  if (this.isEmpty()) return null;

  const root = this._elements[0];
  const lastNode = this._elements.pop();

  if (this._elements.length > 0) {
    this._elements[0] = lastNode;
    this.heapifyDown();
  }

  return root;
};

Heap.prototype.heapifyUp = function () {
  let curIndex = this._elements.length - 1;
  while (curIndex > 0) {
    const parentIndex = Math.floor((curIndex - 1) / 2);
    if (
      this._comparator(this._elements[curIndex], this._elements[parentIndex]) >=
      0
    )
      break;
    [this._elements[curIndex], this._elements[parentIndex]] = [
      this._elements[parentIndex],
      this._elements[curIndex],
    ];
    curIndex = parentIndex;
  }
};

Heap.prototype.heapifyDown = function () {
  let curIndex = 0;
  const length = this._elements.length;

  while (true) {
    let smallestIndex = curIndex;
    const leftChildIndex = 2 * curIndex + 1;
    const rightChildIndex = 2 * curIndex + 2;

    if (
      leftChildIndex < length &&
      this._comparator(
        this._elements[curIndex],
        this._elements[leftChildIndex]
      ) > 0
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < length &&
      this._comparator(
        this._elements[smallestIndex],
        this._elements[rightChildIndex]
      ) > 0
    ) {
      smallestIndex = rightChildIndex;
    }

    if (curIndex === smallestIndex) break;

    [this._elements[curIndex], this._elements[smallestIndex]] = [
      this._elements[smallestIndex],
      this._elements[curIndex],
    ];

    curIndex = smallestIndex;
  }
};

const heap = new Heap((a, b) => a - b);

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = [null];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  times.forEach(([u, v, w]) => {
    graph[u].push([v, w]);
  });

  const heap = new Heap((a, b) => {
    return a[1] - b[1];
  });

  let visited = Array(n + 1).fill(-1);
  visited[0] = 0;

  let totalDist = 0;

  heap.push([k, 0]);

  while (!heap.isEmpty()) {
    const [curNode, dist] = heap.pop();
    if (visited[curNode] >= 0) continue;
    visited[curNode] = dist;
    totalDist = Math.max(totalDist, dist);
    for (const [nextNode, distToNext] of graph[curNode]) {
      if (visited[nextNode] >= 0) continue;
      heap.push([nextNode, dist + distToNext]);
    }
  }

  console.log('visited', visited);

  return visited.some((x) => x === -1) ? -1 : Math.max(...visited);
};
