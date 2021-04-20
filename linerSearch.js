const readlineSync = require("readline-sync");
const linerSearch = (arg, num) => {
  if (!arg.includes(num)) {
    return `${num}は存在しません。`;
  }
  for (i = 0; i < arg.length; i++) {
    if (arg[i] == num) {
      return `${num}は${i + 1}番目に存在します。`;
    }
  }
};

const array = [311, 314, 33, 12, 3, 97, 44, 25, 8];
console.log(array, "\n探索したい数字を入力してください。");
const num = readlineSync.question();
console.log(linerSearch(array, Number(num)));
