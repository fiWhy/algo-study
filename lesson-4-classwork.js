const { Stack, StackArray } = require('./lib/stack');
const { Queue, QueueArray } = require('./lib/queue');
const { Dequeue, DequeueArray } = require('./lib/dequeue');

const randFrom = (amount, values) => {
  return [...Array(amount)].map(
    () => values[(Math.random() * values.length) >> 0]
  );
};

const brackets = randFrom(4, ['(', ')']);

const checkBrackets = (arr) => {
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === ')') {
      if (!stack.pop()) return false;
    } else {
      stack.push(element);
    }
  }

  return !stack.size;
};

const checkBracketsRecursive = (arr, i = 0, stack = new Stack()) => {
  const element = arr[i];

  if (!element && stack.size) return false;
  if (!element && !stack.size) return true;

  if (element === '(') {
    stack.push(element);
  } else {
    if (!stack.pop()) return false;
  }

  return checkBracketsRecursive(arr, ++i, stack);
};
