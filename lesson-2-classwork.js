const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const bin = (arr, k, l = 0, r = arr.length - 1) => {
  let m = (l + r) >> 1;

  if (arr[m] === k) {
    return "YES";
  }

  if (l > r) {
    return "NO";
  }

  if (arr[m] < k) {
    return bin(arr, k, m + 1, r);
  } else {
    return bin(arr, k, l, m - 1);
  }
};

const findWay = (matrix, x = 1, y = 1) => {
  if (matrix[y][x] === 2) {
    return true;
  }

  let res = false;
  if (matrix[y + 1][x] !== 1) {
    console.log("Move down");
    res |= findWay(matrix, x, y + 1);
  }

  if (matrix[y][x + 1] !== 1) {
    console.log("Move right");
    res |= findWay(matrix, x + 1, y);
  }

  return res;
};

const map = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

const f = n => (n ? f((n / 10) | 0) + (n % 10) : 0);

const gcd = (a, b) => (!a ? b : gcd(b % a, a));

const lcm = (a, b) => (a * b) / gcd(a, b);

// console.log(gcd(2423, 12));

const superDigit = n => {
  if (n < 10) return n;
  const lastDigit = n % 10;
  const res = superDigit((n - lastDigit) / 10) + lastDigit;

  console.log(res);
  return superDigit(res);
};

console.log(superDigit(148148148));
