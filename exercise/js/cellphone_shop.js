function answer(employee) {
    let employee_id = [...employee];
    employee.sort(function(a, b) {
      return a - b;
    })
    let last = employee[employee.length - 1];
  return employee_id.indexOf(last);
}

let input = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`)
}

/* let employee = [
  [5, 6, 7, 9, 10]
]

employee.sort(function(a, b) {
  return a - b;
})

console.log(employee) */