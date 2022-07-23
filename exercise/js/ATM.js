function answer(withdraw, total) {
  let result;

  /* 
  if (withdraw % 5 != 0) {
    result = total;
  } else if (withdraw + 0.5 < total) {
    result = total;
  } else {
    result = total - withdraw - 0.5;
  } */
  
  if (withdraw % 5 == 0) {
    withdraw += 0.5;
    if (withdraw > total) {
      result = total;
    } else {
    total -= withdraw;
    result = total;
    }
  } else {
    result = total;
  }
  return result;
}

let input = [
  [40, 130.0],
  [33, 130.0],
  [300, 300.0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
}