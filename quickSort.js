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
console.log(quickSort(array));
