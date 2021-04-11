const fibo = (n) => {
  if ((n == 0) | (n == 1)) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};
console.log(fibo(10));
// n公の値を求める
