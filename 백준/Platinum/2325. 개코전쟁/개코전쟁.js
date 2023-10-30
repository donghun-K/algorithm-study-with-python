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
for (let i = 1; i <= M; i++) {
  const [x, y, z] = input[i].split(' ').map(Number);
  graph[x].push([y, z]);
  graph[y].push([x, z]);
}

let distance = Array(N + 1).fill(Infinity);

function dijkstra(x, y) {
  let pq = new PriorityQueue((a, b) => b[1] - a[1]);
  pq.enq([1, 0]);
  distance[1] = 0;
  while (pq.size() > 0) {
    const [now, dist] = pq.deq();
    if (distance[now] < dist) continue;
    for (const [next, distToNext] of graph[now]) {
      if ((next === x && now === y) || (next === y && now === x)) continue;
      let cost = dist + distToNext;
      if (cost < distance[next]) {
        distance[next] = cost;
        pq.enq([next, cost]);
      }
    }
  }
}

function bfs() {
  const q = [];
  const visited = Array(N + 1).fill(false);
  q.push(N);
  const removes = [];
  while (q.length > 0) {
    const now = q.shift();
    if (now === 1) continue;
    for ([prev, distToPrev] of graph[now]) {
      const cost = distance[prev] + distToPrev;
      if (cost === distance[now]) {
        removes.push([prev, now]);
        if (!visited[prev]) {
          q.push(prev);
          visited[prev] = true;
        }
      }
    }
  }
  return removes;
}

dijkstra(-1, -1);
const removes = bfs();

let result = 0;

for (const [a, b] of removes) {
  distance = new Array(N + 1).fill(Infinity);
  dijkstra(a, b);
  if (distance[N] === Infinity) continue;
  result = Math.max(result, distance[N]);
}

console.log(result);
