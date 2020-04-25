class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.size) {
      this.tail = this.head = node;
    } else {
      node.next = this.tail;
      this.tail = node;
    }
    this.size++;
    return this.tail.value;
  }

  back() {
    if (this.size) return this.tail.value;
    return this.tail.value;
  }

  front() {
    return this.head.value;
  }

  pop() {
    if (!this.size) return null;
    const node = this.tail;
    this.tail = node.next;

    this.size--;
    return node.value;
  }

  getSize() {
    return this.size;
  }
}

class QueueArray {
  constructor() {
    this.arr = Array(10e5);
    this.head = 0;
    this.tail = -1;
  }

  getSize() {
    return this.tail - this.head + 1;
  }

  push(value) {
    this.arr[++this.tail] = value;
  }

  back() {
    if (this.head > this.tail) return null;
    return this.arr[this.head];
  }

  pop() {
    if (this.head > this.tail) return null;
    const value = this.arr[this.head++];
    return value;
  }

  clear() {
    this.head = 0;
    this.tail = -1;
  }
}

module.exports = {
  Queue,
  Node,
  QueueArray,
};
