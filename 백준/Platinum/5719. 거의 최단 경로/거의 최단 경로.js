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

let line = 0;
while (true) {
  [N, M] = input[line].split(' ').map(Number);
  if (N == 0 && M == 0) break;
  [S, E] = input[line + 1].split(' ').map(Number);
  let graph = [];
  for (let i = 0; i < N; i++) graph.push([]);
  const rGraph = [];
  for (let i = 0; i < N; i++) rGraph.push([]);
  for (let i = line + 2; i < line + 2 + M; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c]);
    rGraph[b].push([a, c]);
  }
  let distance = new Array(N).fill(Infinity);

  const dijkstra = () => {
    let pq = new PriorityQueue((a, b) => b[0] - a[0]);
    pq.enq([0, S]);
    distance[S] = 0;
    while (pq.size() != 0) {
      let [dist, now] = pq.deq();
      if (distance[now] < dist) continue;
      for (let i of graph[now]) {
        let cost = dist + i[1];
        if (cost < distance[i[0]]) {
          distance[i[0]] = cost;
          pq.enq([cost, i[0]]);
        }
      }
    }
  };

  const bfs = () => {
    const q = [];
    let visited = new Set();
    q.push(E);
    let removes = [];
    while (q.length != 0) {
      let now = q.shift();
      if (now == S) continue;
      for (let i of rGraph[now]) {
        let cost = distance[i[0]] + i[1];
        if (cost == distance[now]) {
          removes.push([i[0], now]);
          if (!visited.has(i[0])) {
            q.push(i[0]);
            visited.add(i[0]);
          }
        }
      }
    }
    return removes;
  };

  const getNewGraph = () => {
    const removes = bfs();
    const newGraph = [];
    for (let i = 0; i < N; i++) newGraph.push([]);
    for (let a = 0; a < N; a++) {
      for (let [b, c] of graph[a]) {
        let check = true;
        for (let [x, y] of removes) {
          if (a == x && b == y) check = false;
        }
        if (check) newGraph[a].push([b, c]);
      }
    }
    return newGraph;
  };

  dijkstra();
  graph = getNewGraph();
  distance = new Array(N).fill(Infinity);
  dijkstra();
  if (distance[E] == Infinity) console.log(-1);
  else console.log(distance[E]);
  line += M + 2;
}
