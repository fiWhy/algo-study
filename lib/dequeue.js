class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const n = new Node(value);
    if (this.size === 0) {
      this.head = this.tail = n;
    } else {
      n.prev = this.tail;
      this.tail.next = n;
      this.tail = n;
    }
    this.size++;
    return n.value;
  }

  unshift(value) {
    const n = new Node(value);
    if (this.size === 0) {
      this.head = this.tail = n;
    } else {
      n.next = this.head;
      this.head.prev = n;
      this.head = n;
    }
    this.size++;
    return n.value;
  }

  pop() {
    if (this.size === 0) return null;
    const result = this.tail.value;
    this.tail = this.tail.prev;
    this.size--;
    return result;
  }

  shift() {
    if (this.size === 0) return null;
    const result = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;

    this.size--;
    return result;
  }

  back() {
    return this.tail.value;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

class DequeueArray {
  constructor() {
    this.arr = Array(10e5);
    this.head = 0;
    this.tail = -1;
  }

  push(value) {
    this.arr[++this.tail] = value;
    return value;
  }

  back() {
    return this.arr[this.tail];
  }

  pop() {
    return this.arr[this.tail--];
  }

  unshift(value) {
    return (this.arr[--this.head] = value);
  }

  front() {
    return this.arr[this.head];
  }

  getSize() {
    return this.tail - this.head + 1;
  }

  clear() {
    this.arr[(this.head = 0)] = undefined;
    this.tail = -1;
  }

  get(i) {
    return this.tail >= i ? this.arr[i] : undefined;
  }
}

module.exports = {
  Dequeue,
  Node,
  DequeueArray,
};
