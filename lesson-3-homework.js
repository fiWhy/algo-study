const path = require('path');
const lodash = require('lodash');
const { readFileByLine } = require('./lib/file');

const classesMock = lodash.chunk(
  readFileByLine(path.join(__dirname, './mocks/classes.txt')).slice(1),
  4
);

const generate = (amount, max) =>
  [...Array(amount)].map((_) => (Math.random() * max) >> 0);

const calcTime = (fn) => (...args) => {
  const d = new Date();
  const res = fn(...args);
  return (new Date() - d) / 1000;
};

const nSum = (n) => (!(n / 10) ? 0 : (n % 10) + nSum((n / 10) >> 0));
const nSumImperative = (n) => {
  let l,
    num = n,
    sum = 0;
  while (num / 10) {
    l = num % 10;
    num = (num / 10) >> 0;
    sum += l;
  }

  return sum;
};

/**
 * Task 1
 * Calculate amount of steps
 * Stack overflow on 99999+
 * @param {number} n
 */
const count = (n, step = 1) =>
  n <= 0 ? step : decWithSum(n - nSum(n), ++step);

const countImperative = (n) => {
  let steps = 1;
  let res = n;
  while (res > 0) {
    steps++;
    res -= nSumImperative(res);
  }
  return steps;
};

// console.log(countImperative(55)) // 7

/**
 * Task 2
 * @param {number[]} arr
 */
const quickSort = (arr, l = 0, r = arr.length - 1) => {
  const l1 = l,
    r1 = r,
    m = arr[(l + r) >> 1];
  while (l <= r) {
    while (arr[l++] < m);
    while (arr[r--] > m);
    if (l <= r) {
      [arr[r], arr[l]] = [arr[l], arr[r]];
      l++;
      r--;
    }
  }

  if (l1 < r) {
    quickSort(arr, l1, r);
  }

  if (l < r1) {
    quickSort(arr, l, r1);
  }
  return arr;
};

const quickWithTime = calcTime(quickSort);
/**
 * Task 2
 */
// const res = [
//   quickWithTime(generate(10, 100)),
//   quickWithTime(generate(100, 100)),
//   quickWithTime(generate(1e3, 100)),
//   quickWithTime(generate(1e5, 100)),
//   quickWithTime(generate(1e6, 100)),
//   quickWithTime(generate(1e7, 100))
// ];

/**
 * Task 3
 */
const strArr = ['5', '10', '123', '1'];
// console.log(strArr.sort((a, b) => Number(a) - Number(b)));

/**
 * Task 4
 */
const convertTimeToNum = ([h, m, s]) => h * 1000 + m * 10 + s;

const data = [
  [10, 20, 30],
  [7, 30, 0],
  [23, 59, 59],
  [10, 30, 30],
];

// console.log(
//   quickWithComparator(data, (a, b) => convertTimeToNum(a) < convertTimeToNum(b))
// );

/**
 * Task 5
 */

// console.log(
//   classesMock.sort((a, b) => (a[2] + a[0]).localeCompare(b[2] + b[0]))
// );
