const Node = function (url) {
  this.url = url;
  this.prev = null;
  this.next = null;
};

Node.prototype.setPrev = function (node) {
  this.prev = node;
};

Node.prototype.setNext = function (node) {
  this.next = node;
};

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  const node = new Node(homepage);
  this.current = node;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newNode = new Node(url);
  this.current.setNext(newNode);
  newNode.setPrev(this.current);
  this.current = newNode;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let loop = steps;
  while (loop--) {
    if (!this.current.prev) break;
    this.current = this.current.prev;
  }
  return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let loop = steps;
  while (loop--) {
    if (!this.current.next) break;
    this.current = this.current.next;
  }
  return this.current.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
