const bubbleSort = (arg) => {
  for (i = 0; i < arg.length; i++) {
    for (j = arg.length; i < j; j--) {
      if (arg[j] < arg[j - 1]) {
        const tmp = arg[j - 1];
        arg[j - 1] = arg[j];
        arg[j] = tmp;
      }
    }
  }
  return arg;
};

const array = new Array(311, 314, 33, 12, 3, 97, 44, 25, 8);
console.log(bubbleSort(array));
