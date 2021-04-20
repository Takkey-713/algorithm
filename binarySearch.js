const readlineSync = require("readline-sync");

const binarySearch = (arg, num) => {
  if (!arg.includes(num)) {
    console.log(`${num}は存在しません。`);
    return;
  }
  let head = 0;
  let tail = arg.length;
  while (head < tail) {
    let middle = Math.floor((head + tail) / 2);
    if (arg[middle] === num) {
      console.log(`${num}は${middle + 1}番目にあります。`);
      break;
    } else if (arg[middle] < num) {
      head = middle;
    } else {
      tail = middle;
    }
  }
};

const quickSort = (arg) => {
  if (arg.length < 2) {
    return arg;
  } else {
    const small = [];
    const middle = [];
    const big = [];
    const pivot = Math.floor(arg.length / 2);
    for (i = 0; i < arg.length; i++) {
      if (arg[i] > arg[pivot]) {
        big.push(arg[i]);
      } else if (arg[i] < arg[pivot]) {
        small.push(arg[i]);
      } else {
        middle.push(arg[i]);
      }
    }
    return quickSort(small).concat(middle, quickSort(big));
  }
};

const array = [311, 314, 33, 12, 3, 97, 44, 25, 8];
const result = quickSort(array);
console.log(result, "\n探索したい数字を入力してください。");
const num = readlineSync.question();
binarySearch(result, Number(num));
