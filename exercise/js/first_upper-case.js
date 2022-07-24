function answer(str) {
  let fix_str = [];
  /* 
  let fix_str = "";

  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }
  */
  fix_str = str.split(' ');
  for (let i = 0; i <= fix_str.length - 1; i++) {
    fix_str[i] = fix_str[i][0].toUpperCase() + fix_str[i].slice(1);
  }
  fix_str = fix_str.join(' ');

  return fix_str;
}

let input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`)
}