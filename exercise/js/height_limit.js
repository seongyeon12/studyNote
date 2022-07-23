function answer(user) {
  if (user.height > 150) {
    return true;
  } else {
    return false;
  }
}

let input = [
  {name: "jon", age: 20, height: 181},
  {name: "ailce", age: 14, height: 146},
  {name: "bob", age: 12, height: 151},
]

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}