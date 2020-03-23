const isEven = n => !(n % 2);
const isUndefined = n => n === undefined;

const collatz = n =>
  n === 1 ? true : isEven(n) ? collatz(n / 2) : collatz(3 * n + 1);

const collatzWithChain = n => {
  let op = 0;
  const inner = m => {
    op++;
    return m === 1 ? true : isEven(m) ? inner(m / 2) : inner(3 * m + 1);
  };

  return [n, inner(n), op];
};

const collatzTest = ([from, to]) => {
  for (let i = from, positive = 0; i <= to; i++) {
    const [number, result, operationsAmount] = collatzWithChain(i);

    if (result) positive++;

    console.log([
      `Number: ${number}`,
      `Collatz check: ${result}`,
      `Operations: ${operationsAmount}`
    ]);
    console.log("Is every result true?: ", positive === to - from + 1);
  }
};

const trib = n => {
  if (n < 2) {
    return 0;
  }

  if (n < 4) {
    return 1;
  }

  return trib(n - 1) + trib(n - 2) + trib(n - 3);
};

const tribCollection = {};
const tribOptimized = n => {
  if (n < 2) {
    return 0;
  }

  if (n < 4) {
    return 1;
  }

  if (isUndefined(tribCollection[n - 3])) {
    tribCollection[n - 3] = trib(n - 3);
  }
  if (isUndefined(tribCollection[n - 2])) {
    tribCollection[n - 2] = trib(n - 2);
  }
  if (isUndefined(tribCollection[n - 1])) {
    tribCollection[n - 1] = trib(n - 1);
  }
  return (tribCollection[n] =
    tribCollection[n - 1] + tribCollection[n - 2] + tribCollection[n - 3]);
};

const tribLoop = n => {
  if (n < 2) {
    return 0;
  }

  if (n < 4) {
    return 1;
  }

  let a = 0,
    b = 1,
    c = 1,
    d,
    e;
  for (let i = 3; i < n; i++) {
    d = b;
    e = c;

    c += a + b;

    a = d;
    b = e;
  }
  return c;
};

const fib = n => {
  if (n === 0) return 0;
  if (n < 3) return 1;
  return fib(n - 2) + fib(n - 1);
};

const fibCollection = {};
const fibOptimized = n => {
  if (n === 0) return 0;
  if (n < 3) return 1;
  if (isUndefined(fibCollection[n - 1])) {
    fibCollection[n - 1] = fib(n - 1);
  }
  if (isUndefined(fibCollection[n - 2])) {
    fibCollection[n - 2] = fib(n - 2);
  }

  return (fibCollection[n] = fibCollection[n - 1] + fibCollection[n - 2]);
};

const fibLoop = n => {
  let a = 1,
    b = 1,
    c;
  for (let i = 3; i < n; i++) {
    c = b;
    b += a;
    a = c;
  }
  return b;
};

const binaryRecursive = (arr, k, l = 0, r = arr.length - 1) => {
  if (l > r) {
    return -1;
  }
  const m = (l + r) >> 1;

  if (arr[m] === k) {
    return m;
  }

  if (arr[m] < k) {
    return binaryRecursive(arr, k, m + 1, r);
  } else {
    return binaryRecursive(arr, k, l, m - 1);
  }
};

const deepClone = src => {
  const newObj = {};
  for (const key in src) {
    if (src.hasOwnProperty(key)) {
      const element = src[key];
      if (typeof element === "object") {
        newObj[key] = deepClone(element);
      } else {
        newObj[key] = element;
      }
    }
  }
  return newObj;
};
