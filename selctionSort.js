const selectSort = (arg) => {
  for (i = 0; i < arg.length; i++) {
    let min = arg[i];
    let head = i;
    // 配列先頭の数値とその添字を定義する
    for (j = i + 1; j < arg.length; j++) {
      if (min > arg[j]) {
        // 二重ループし、隣合う値を比較し、最小値minと添字headを上書きする
        min = arg[j];
        head = j;
      }
    }
    let tmp = arg[i];
    arg[i] = arg[head];
    arg[head] = tmp;
    // 実際の交換処理
  }
  return arg;
};
const array = [311, 314, 33, 12, 3, 97, 44, 25, 8];
console.log(selectSort(array));
