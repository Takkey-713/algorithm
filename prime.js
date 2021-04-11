const prime = () => {
  const number = 1000;
  for (i = 2; i < number; i++) {
    for (j = 2; j < 1000; j++) {
      if (i % j == 0) {
        break;
        //2以上の自然数同士を総当たりで剰余計算し、割り切れた場合処理を中断する
      }
    }
    if (i == j) {
      console.log(i);
      // 自身の以外の約数を持たない場合数の出力
    }
  }
};
prime();
