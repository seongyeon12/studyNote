let result;

function recursive(number) {
  if (number == 1) {
    return 1;
  }
  // 5 * 4 * 3 * 2 * 1
  return recursive(number - 1) * number;
}

result = recursive(5);