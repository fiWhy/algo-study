const { Stack } = require('../lib/stack');
const X = 5;
const Y = 5;
const map = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const stack = new Stack();
let result = 0;
for (let i = 1; i <= Y; i++) {
  for (let j = 1; j <= X; j++) {
    if (map[i][j] === 0) {
      result++;
      stack.push([i, j]);

      while (stack.size > 0) {
        let [i1, j1] = stack.pop();
        map[i1][j1] = 2;

        if (map[i1 + 1][j1] === 0) {
          stack.push([i1 + 1, j1]);
        }
        if (map[i1 - 1][j1] === 0) {
          stack.push([i1 - 1, j1]);
        }
        if (map[i1][j1 + 1] === 0) {
          stack.push([i1, j1 + 1]);
        }
        if (map[i1][j1 - 1] === 0) {
          stack.push([i1, j1 - 1]);
        }
      }
    }
  }
}

console.log(result);
