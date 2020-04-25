class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const n = new Node(value);
    n.next = this.head;
    this.head = n;
    this.size++;
    return n.value;
  }

  pop() {
    if (!this.size) return null;
    const n = this.head;
    this.head = n.next;
    this.size--;
    return n.value;
  }

  back() {
    return this.head.value;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

class StackArray {
  constructor() {
    this.arr = Array(10e5);
    this.head = -1;
  }

  push(value) {
    this.arr[++this.head] = value;
    return value;
  }

  pop() {
    return this.arr[this.head--];
  }

  clear() {
    this.head = -1;
  }

  getSize() {
    return this.head + 1;
  }
}

module.exports = {
  Stack,
  Node,
  StackArray,
};
