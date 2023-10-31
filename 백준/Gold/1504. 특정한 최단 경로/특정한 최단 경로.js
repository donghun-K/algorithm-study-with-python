// priorityqueuejs
// https://github.com/janogonzalez/priorityqueuejs
// MIT LICENCE

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0];
};
PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};
PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};
PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};
PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

/////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = [null];

for (let i = 0; i < N; i++) {
  graph.push([]);
}

for (let line = 1; line <= M; line++) {
  const [a, b, c] = input[line].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const [v1, v2] = input[M + 1].split(' ').map(Number);

const dijkstra = (start, end) => {
  const distance = new Array(N + 1).fill(Infinity);
  const pq = new PriorityQueue((a, b) => b[1] - a[1]);
  pq.enq([start, 0]);
  distance[start] = 0;
  while (pq.size() > 0) {
    const [now, dist] = pq.deq();
    if (dist > distance[now]) continue;
    for (const [next, distToNext] of graph[now]) {
      const cost = dist + distToNext;
      if (cost >= distance[next]) continue;
      pq.enq([next, cost]);
      distance[next] = cost;
    }
  }

  return distance[end];
};

const distV1V2 = dijkstra(v1, v2);

const distA1 = dijkstra(1, v1);
const distA2 = dijkstra(v2, N);

const distB1 = dijkstra(1, v2);
const distB2 = dijkstra(v1, N);

const distRouteA = distA1 + distA2 + distV1V2;
const distRouteB = distB1 + distB2 + distV1V2;

console.log(
  Math.min(distRouteA, distRouteB) !== Infinity
    ? Math.min(distRouteA, distRouteB)
    : -1
);
