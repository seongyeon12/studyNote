// 강사님 풀이 (answer2)
function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.has = function has(key) {
  return this.items.hasOwnProperty(key);
}

Dictionary.prototype.set = function has(key, value) {
  return this.items[key] = value;
}

function answer2(class_1, class_2) {
  let result = [];

  let tmp = new Dictionary();
  for (let i = 0; i < class_2.length; i++) {
    tmp.set(class_1[i], true);
  }

  for (let i = 0; i < class_1.length; i++) {
    if (tmp.has(class_1[i])) {
      result.push(class_1[i])
    }
  }

  return result;
}

// 내 풀이 (answer)
function answer(class_1, class_2) {
  let result = [];
  let obj = {};

  for (let i = 0; i < class_2.length; i++) {
    obj[class_2[i]] = 1;
  }

  for (let i = 0; i < class_1.length; i++) {
    obj[class_1[i]] === undefined ? null : result.push(class_2[i])
  }

  return result;
}

let input = [
  [
    ["Kali", "Oliver", "Naomi"],
    ["Oliver", "Naomi", "Maya"],
  ],
  [
    ["Roxy", "Olga", "Kara", "Nana"],
    ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
  ],
  [
    ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
    ["Olga", "Nana", "Rei", "Oliver", "Kali", "Rei", "Kara"],
  ]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

