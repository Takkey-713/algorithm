const mergeSort = (arg) => {
  if (arg.length <= 1) {
    return arg;
  } else {
    const pivot = Math.floor(arg.length / 2);
    const left = arg.slice(0, pivot);
    const right = arg.slice(pivot);
    return merge(mergeSort(left), mergeSort(right));
  }
};

const merge = (leftArray, rightArray) => {
  const data = { sortedArray: [], leftIndex: 0, rightIndex: 0 };
  // var letを使いたくないが後にindexの値を加算して変更するのでobjectに
  while (
    data.leftIndex < leftArray.length &&
    data.rightIndex < rightArray.length
    // 両方の配列が空になるまで処理を実行する
  ) {
    if (leftArray[data.leftIndex] < rightArray[data.rightIndex]) {
      data.sortedArray.push(leftArray[data.leftIndex]);
      data.leftIndex++;
    } else {
      data.sortedArray.push(rightArray[data.rightIndex]);
      data.rightIndex++;
    }
  }
  console.log(leftArray.slice(data.leftIndex));
  console.log(rightArray.slice(data.rightIndex));

  return data.sortedArray
    .concat(leftArray.slice(data.leftIndex))
    .concat(rightArray.slice(data.rightIndex));
  // sliceで重複する値を取り除く
};

const array = [311, 314, 33, 12, 3, 97, 44, 25, 8];
mergeSort(array);
