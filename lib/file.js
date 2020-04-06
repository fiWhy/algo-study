const fs = require('fs');

const readFileByLine = addr =>
  fs
    .readFileSync(addr)
    .toString()
    .split(/\r?\n/)
    .filter(v => v);

module.exports = {
  readFileByLine
};
