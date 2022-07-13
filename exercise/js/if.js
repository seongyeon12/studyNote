function MAX(x, y) {
  if(x > y) {
    return x;
  } else {
    return y;
  }
  // refurn x > y ? x : y; case 2
}

console.log(MAX(0, 3)); // 3
console.log(MAX(-1, 5)); // 5
console.log(MAX(100, 7)); // 100