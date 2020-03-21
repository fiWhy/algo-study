/**
 * Classwork example
 */
const generedTypes = n => {
  const types = Array(n)
    .fill(1)
    .map((_, i) => i + 1);
  let op = 0;
  for (let i = 2; i < n; i++) {
    op++;
    if (types[i - 1]) {
      for (let j = Math.pow(i, 2); j < n; j += i) {
        op++;
        delete types[j - 1];
      }
    }
  }
  console.log("Iterations", op);
  return types.filter(n => n);
};

/**
 * Check is number is prime
 * @param {number} n
 */
const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

{
  /**
   * Complexity = O(n + n(n-1)) = O(n+n^2-n) = O(n^2)
   */
  let n = 10000;
  let arr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    arr.push(i * i + 2 * i + 28);
  }

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < i; j++) {
        sum += arr[j];
      }
    }
  }
}

const binarySearch = (arr, n) => {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (arr[m] === n) {
      return m;
    }

    if (arr[m] < n) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return undefined;
};

const binarySearchWithAnswer = (arr, n) =>
  typeof binarySearch(arr, n) === "number" ? "YES" : "NO";

/**
 * Count of numbers by interval
 */

const countN = (arr, [from, to]) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element <= to && element >= from) {
      amount++;
    }
  }

  return amount;
};

/**
 * Square root
 */
const squareRoot = (n, precision = 0) => {
  let l = 0,
    r = n,
    m,
    res;

  while (l <= r) {
    m = Math.ceil((l + r) / 2);

    if (m * m === n) {
      res = m;
      break;
    }

    if (m * m < n) {
      l = m + 1;
      res = m;
    } else {
      r = m - 1;
    }
  }
  let inc = 0.1;
  for (let i = 0; i < precision; i++) {
    while (res * res <= n) {
      res += inc;
    }
    res -= inc;
    inc /= 10;
  }

  return Number(res.toFixed(precision));
};

/**
 * hackerrank's task
 */
const reverseArray = (arr, n = arr.length) => {
  const newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const reverseArrayOneLine = (arr, n = arr.length) => arr.reverse().slice(0, n);
