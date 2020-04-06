const generate = (amount, max) =>
  Array(amount)
    .fill(1)
    .map(_ => (Math.random() * max) >> 0);

const bubble = arr => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
  }
  return newArr;
};

const arithmeticProgression = n => (n * (n + 1)) / 2;

const selection = arr => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    let min = 1e9;
    let minIndex = -1;
    for (let j = i; j < newArr.length; j++) {
      if (newArr[j] < min) {
        min = newArr[j];
        minIndex = j;
      }
    }

    [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]];
  }
  return newArr;
};

const count = (arr, maxN) => {
  let count = Array(maxN + 1).fill(0);
  const newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let index = 0;
  for (let i = 0; i < maxN; i++) {
    if (count[i]) {
      let k = count[i];
      while (k-- > 0) newArr[index++] = i;
    }
  }

  return newArr;
};

const quick_sort = (arr, l = 0, r = arr.length - 1) => {
  const x = arr[(l + r) >> 1];
  const l1 = l;
  const r1 = r;

  while (l <= r) {
    while (arr[l] < x) l++;
    while (arr[r] > x) r--;

    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r++;
    }

    if (l1 < r) quick_sort(arr, l1, r);

    if (r1 > l) quick_sort(arr, l, r1);
  }
};

const quick = (arr, l = 0, r = arr.length - 1) => {
  const x = arr[(l + r) >> 1];
  const l1 = l;
  const r1 = r;
  while (l <= r) {
    while (arr[l] < x) l++;
    while (arr[r] > x) r--;

    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  if (l1 < r) quick(arr, l1, r);

  if (l < r1) quick(arr, l, r1);
};

// console.log(bubble(generate(1000, 10000)));
// console.log(selection(generate(1000, 10000)));
// console.log(count(generate(1000, 10000), 10000));
// const arr = generate(10, 20);
// quick(arr);
// console.log(arr);
